import Block from '../../../../components/block/block'
import compile from '../../../../utils/compile'

import { Props } from './types'
import { yourMessageTmpl } from './yourMessage.tmpl'

export default class YourMessage extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { time, text } = this.props
    return compile(yourMessageTmpl, {
      time, 
      text
    })
  }
}