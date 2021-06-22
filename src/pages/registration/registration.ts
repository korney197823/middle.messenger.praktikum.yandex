import Block from '../../components/block/block'
import FormReg from '../../modules/form/formReg/formReg'
import compile from '../../utils/compile'

import regTmpl from './template'
import { Props } from './types'

export default class Registration extends Block<Props> {
  constructor() {
    super({
      form: new FormReg(),
    }, 'div', '.app');
  }

  render() {
    const { form } = this.props;
    return compile(regTmpl, {
      form
    })
  }
}