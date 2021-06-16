import Block from '../../../../components/block/block'
import YourMessage from '../yourMessage/yourMessage'
import MyMessage from '../myMessage/myMessage'
import compile from '../../../../utils/compile'

import { Props } from './types'
import { messengerContentTmpl } from './messengerContent.tmpl'
import './messengerContent.sass'

export default class MessengerContent extends Block<Props> {
  constructor() {
    super({
      messages: [
        new YourMessage({
          time: '11:56',
          text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории'
        }),
        new MyMessage({
          time: '12:00',
          text: 'Круто!'
        })
      ]
    });
  }
  render() {
    const { messages } = this.props
    return compile(messengerContentTmpl, {
      messages
    })
  }
}