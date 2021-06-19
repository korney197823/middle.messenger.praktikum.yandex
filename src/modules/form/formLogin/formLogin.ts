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
        href: 'registration.html',
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
        submit: (e) => this.onSubmit(e)
      }
    });
  }

  onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const form = {
      login: formData.get('login'),
      password: formData.get('password')
    }
    if (!this.props.form.onValid(form)) return
    console.log(form)
  }
  render() {
    const { form } = this.props
    const el = compile(formLoginTmpl, {
      form
    })
    return el
  }
}