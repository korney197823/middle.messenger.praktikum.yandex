import Block from '../block/block'
import compile from '../../utils/compile'
import formTmpl from './form.tmpl'
import { Props } from './types'

export default class Form extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }
  
  render() {
    const {
      title, content, text, isLink = false, href, linkText
    } = this.props
    return compile(formTmpl, {
      title, content, text, isLink, href, linkText
    })
  }
  
}