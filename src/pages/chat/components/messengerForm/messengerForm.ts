import Block from '../../../../components/block/block'
import compile from '../../../../utils/compile'

import { Props } from './types'
import { messengerFormTmpl } from './messengerForm.tmpl'

export default class MessengerForm extends Block<Props> {
  constructor() {
    super({
      events: {
        submit: (e) => console.log(e)
      }
    });
  }
  render() {
    return compile(messengerFormTmpl, {})
  }

}