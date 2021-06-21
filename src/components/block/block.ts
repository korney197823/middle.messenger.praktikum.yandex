// @ts-ignore
import {v4 as makeUUID} from 'uuid'
import EventBus from '../eventBus/eventBus'
// @ts-ignore
import isEqual from 'lodash.isequal'
import {BlockProps} from './types'



export default abstract class Block<T extends BlockProps> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };
  props: T;
  eventBus: () => EventBus;
  private _element: HTMLElement | null;
  private _meta: Record<string, unknown>;
  private _id: string;


  constructor(props: T, tagName = "div", selector: string | null = null) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
      selector
    };

    this._id = makeUUID();

    this.props = this._makePropsProxy({ ...props, _id: this._id });

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName as string);
  }

  private _addEvents() {
    const { events ={} } = this.props;

    if (!this._element) return
    Object.keys(events).forEach((eventName:keyof GlobalEventHandlersEventMap) => {
      this._element?.addEventListener(eventName, events[eventName] as (e: Event) => void);
    });
  }
  private _removeEvents() {
    const { events ={} } = this.props;

    if (!this._element) return
    Object.keys(events).forEach((eventName:keyof GlobalEventHandlersEventMap) => {
      this._element?.removeEventListener(eventName, events[eventName] as (e: Event) => void)
    })
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  private _componentDidMount() {
    this._addEvents()
    this.componentDidMount();
  }

  componentDidMount() {
    return
  }

  private _componentDidUpdate(oldProps: T, newProps: T) {
    if (!isEqual(oldProps, newProps)) {
      this._removeEvents()
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate() {
    return
  }

  setProps = (nextProps: Record<string, unknown>) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  getId() {
    return this._id
  }

  private _render() {
    const block = this.render();
    const {selector} = this._meta

    if (selector) {
      const rootNode = document.querySelector(selector as string)
      if(rootNode) {
        rootNode.append(block)
        this.eventBus().emit(Block.EVENTS.FLOW_CDM)
      }
      return
    }

    if (this._element?.firstChild && block.firstChild) {
      if (this._element.parentNode) {
        this._element.parentNode.replaceChild(block, this._element)
        this._element = block
      }
    } else {
      this._element = block
    }

    this._element?.setAttribute('data-id', this._id)

    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
  }

  render() {
    return this._element
  }

  getContent() {
    return this.element;
  }

  private _makePropsProxy(props: T) {
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set: (target, prop: string, value: unknown) => {
        const oldTarget = {...target}
        // @ts-ignore
        target[prop] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target)
        return true;
      },
      deleteProperty() {
        throw new Error('нет доступа');
      }
    })
  }

  private _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none'
  }
}