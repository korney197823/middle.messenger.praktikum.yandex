import Block from '../../../components/block/block'
import Form from '../../../components/form/form'
import FormField from '../../../components/formField/formField'
import compile from '../../../utils/compile'

import { Props } from './types'
import { formLoginTmpl } from './formLogin.tmpl'

export default class FormLogin extends Block<Props> {
  constructor() {
    super({
      form: new Form({
        title: 'Авторизация',
        text: 'Войти',
        isLink: true,
        href: '#',
        linkText: 'Нет аккаунта?',
        content: [
          new FormField({
            labelName: 'Логин',
            fieldName: 'login',
            type: 'text'
          }),
          new FormField({
            labelName: 'Пароль',
            fieldName: 'password',
            type: 'password'
          }),
        ],
      }),
      events: {
        submit: (e) => {
          e.preventDefault()
          console.log('Hi')
        }
      }
    });
  }
  render() {
    const { form } = this.props
    const el = compile(formLoginTmpl, {
      form
    })
    return el
  }
}