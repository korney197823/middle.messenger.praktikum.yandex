import Block from '../../../components/block/block'
import Form from '../../../components/form/form'
import FormField from '../../../components/formField/formField'
import compile from '../../../utils/compile'

import { Props } from './types'
import { formRegTmpl } from './formReg.tmpl'

export default class FormReg extends Block<Props> {
  constructor() {
    super({
      form: new Form({
        title: 'Регистрация',
        text: 'Зарегистрироваться',
        isLink: true,
        href: 'chat.html',
        linkText: 'Уже зарегистрированы?',
        content: [
          new FormField({
            labelName: 'Почта',
            fieldName: 'email',
            type: 'text'
          }),
          new FormField({
            labelName: 'Логин',
            fieldName: 'login',
            type: 'text'
          }),
          new FormField({
            labelName: 'Имя',
            fieldName: 'first_name',
            type: 'text'
          }),
          new FormField({
            labelName: 'Фамилия',
            fieldName: 'second_name',
            type: 'text'
          }),
          new FormField({
            labelName: 'Телефон',
            fieldName: 'phone',
            type: 'text'
          }),
          new FormField({
            labelName: 'Пароль',
            fieldName: 'password',
            type: 'password'
          }),
          new FormField({
            labelName: 'Пароль (еще раз)',
            fieldName: 'confirmPassword',
            type: 'text'
          }),
        ],
      }),
      events: {
        submit: (e: Event) => this.onSubmit(e)
      }
    });
  }

  onSubmit(e: Event) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const form = {
      email: formData.get('email'),
      login: formData.get('login'),
      first_name: formData.get('first_name'),
      second_name: formData.get('second_name'),
      phone: formData.get('phone'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword')
    }
    this.props.form.onValid(form, {key: 'confirmPassword', value: form.password as string})

  }

  render() {
    const { form } = this.props
    const el = compile(formRegTmpl, {
      form
    })
    return el
  }
}