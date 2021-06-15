import formFieldTmpl from './formField.tmpl'
import Block from '../block/block'
import compile from '../../utils/compile'

import { Props } from './types'

export default class FormField extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
      errorText: '',
      isValid: true,
      fieldValue: '',
      events: {
        focusout: (e) => console.log(e)
      },
    });
  }

  render() {
    const {
      labelName, fieldName, placeholder, type = 'text', errorText, isValid, fieldValue,
    } = this.props;
    const el = compile(formFieldTmpl, {
      labelName,
      fieldName,
      placeholder,
      type,
      errorText,
      isValid,
      fieldValue,
    });
    return el;
  }
}