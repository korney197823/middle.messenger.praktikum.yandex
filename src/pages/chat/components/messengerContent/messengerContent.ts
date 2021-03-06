import Block from '../../../../components/block/block'
import compile from '../../../../utils/compile'
import YourMessage from '../yourMessage/yourMessage'
import MyMessage from '../myMessage/myMessage'

import { Props } from './types'
import { messengerContentTmpl } from './messengerContent.tmpl'
import './messengerContent.sass'

export default class MessengerContent extends Block<Props> {
  constructor() {
    super({
      messages: [
        new YourMessage({
          time: '11:56',
          text: 'Привет! Как оно?'
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