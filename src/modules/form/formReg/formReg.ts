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
        href: '/login.pug',
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
            fieldName: 'password_confirm',
            type: 'text'
          }),
        ],
      }),
      events: {
        submit: (e) => {
          e.preventDefault()
          console.log('Hi registration')
        }
      }
    });
  }
  render() {
    const { form } = this.props
    const el = compile(formRegTmpl, {
      form
    })
    return el
  }
}