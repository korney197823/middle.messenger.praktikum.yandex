import Block from '../../components/block/block'
import FormSetPassword from './components/formSetPassword/formSetPassword'
import compile from '../../utils/compile'

import { setPasswordTmpl } from './setPassword.tmpl'
import { Props } from './types'

export default class SetPassword extends Block<Props> {
  constructor() {
    super({
      form: new FormSetPassword()
    }, 'div', '.app');
  }
  render() {
    const { form } =this.props
    return compile(setPasswordTmpl, {
      form
    })
  }
}