import formFieldTmpl from './formField.tmpl'
import Block from '../block/block'
import compile from '../../utils/compile'
import { VALIDATOR } from './validator'

import { Props } from './types'

export default class FormField extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
      errorText: '',
      isValid: true,
      fieldValue: '',
      events: {
        focusout: (e) => this.onBlur(e)
      },
    });
  }

  onValid(name: string, value: FormDataEntryValue | null, valueTwo?: string): {isValid: boolean, errorText: string} | void {
    if (typeof value !== 'string') {
      return
    }
    if (typeof valueTwo === 'string') {
      return VALIDATOR[`${name}`]?.(value, valueTwo)
    }
    return VALIDATOR[`${name}`]?.(value)
  }

  onUpdate(name: string, value: FormDataEntryValue | null, relatedValue?: string) {
    const { isValid = true, errorText = ''} = this.onValid(name, value, relatedValue) || {}
    this.setProps({
      ...this.props,
      fieldValue: value,
      isValid,
      errorText
    })
  }
  onBlur(e: FocusEvent) {
    const { name, value } = (<HTMLInputElement>e.target)
    this.onUpdate(name, value)
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