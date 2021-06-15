import Block from '../../components/block/block'
import FormLogin from '../../modules/form/formLogin/formLogin'
import compile from '../../utils/compile'

import loginTmpl from './template'
import { Props } from './types'

export default class Login extends Block<Props> {
  constructor() {
    super({
      form: new FormLogin(),
    }, 'div', '.app');
  }
  
  render() {
    const { form } = this.props;
    return compile(loginTmpl, {
      form
    })
  }
}