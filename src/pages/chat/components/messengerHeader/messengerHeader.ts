import Block from '../../../../components/block/block'
import compile from '../../../../utils/compile'

import { messengerHeaderTmpl } from './messengerHeader.tmpl'

export default class MessengerHeader extends Block<Record<string, unknown>> {
  constructor() {
    super({});
  }
  render() {
    return compile(messengerHeaderTmpl, {})
  }

}