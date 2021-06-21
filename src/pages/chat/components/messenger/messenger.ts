import Block from '../../../../components/block/block'
import compile from '../../../../utils/compile'
import MessengerHeader from '../messengerHeader/messengerHeader'
import MessengerContent from '../messengerContent/messengerContent'
import MessengerForm from '../messengerForm/messengerForm'

import { Props } from './types'
import { messengerTmpl } from './messenger.tmpl'

export default class Messenger extends Block<Props> {
  constructor() {
    super({
      messengerHeader: new MessengerHeader(),
      messengerContent: new MessengerContent(),
      messengerForm: new MessengerForm()
    });
  }
  render() {
    const { messengerHeader, messengerContent, messengerForm } = this.props
    return compile(messengerTmpl, {
      messengerHeader,
      messengerContent,
      messengerForm
    })
  }
}