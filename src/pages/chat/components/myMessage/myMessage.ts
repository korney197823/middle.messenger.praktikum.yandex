import Block from '../../../../components/block/block'
import compile from '../../../../utils/compile'

import { Props } from './types'
import { myMessageTmpl } from './myMessage.tmpl'

export default class MyMessage extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const {time, text} = this.props
    return compile(myMessageTmpl, {
      time,
      text
    })
  }
}