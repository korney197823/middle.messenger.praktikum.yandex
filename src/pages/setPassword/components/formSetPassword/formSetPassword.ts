import Block from '../../../../components/block/block'
import Form from '../../../../components/form/form'
import FormField from '../../../../components/formField/formField'
import compile from '../../../../utils/compile'

import { Props } from './types'
import './formSetPassword.sass'
import { formSetPasswordTmpl } from './formSetPassword.tmpl'

export default class FormSetPassword extends Block<Props> {
  constructor() {
    super({
      form: new Form({
        text: 'Сохранить',
        isLink: false,
        content: [
          new FormField({
            labelName: 'Старый пароль',
            fieldName: 'oldPassword',
            type: 'password',
            placeholder: '********'
          }),
          new FormField({
            labelName: 'Новый пароль',
            fieldName: 'password',
            type: 'password',
            placeholder: '********'
          }),
          new FormField({
            labelName: 'Повторите новый пароль',
            fieldName: 'confirmPassword',
            type: 'password',
            placeholder: '********'
          })
        ]
      }),
      events: {
        submit: (e) => this.onSubmit(e)
      }
    });
  }

  onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const form = {
      oldPassword: formData.get('oldPassword'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword')
    }
    if(!this.props.form.onValid(form)) return
  }

  render() {
    const { form } = this.props
    const el = compile(formSetPasswordTmpl,{
      form
    })
    return el
  }
}