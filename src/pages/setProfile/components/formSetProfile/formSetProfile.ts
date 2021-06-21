import Block from '../../../../components/block/block'
import Form from '../../../../components/form/form'
import FormField from '../../../../components/formField/formField'
import compile from '../../../../utils/compile'

import { Props } from './types'
import './formSetProfile.sass'
import { formSetProfileTmpl } from './formSetProfile.tmpl'

export default class FormSetProfile extends Block<Props> {
  constructor() {
    super({
      form: new Form({
        text: 'Сохранить',
        isLink: false,
        content: [
          new FormField({
            labelName: 'Почта',
            fieldName: 'email',
            type: 'email',
            placeholder: 'pochta@yandex.ru'
          }),
          new FormField({
            labelName: 'Логин',
            fieldName: 'login',
            type: 'text',
            placeholder: 'ivanivanov'
          }),
          new FormField({
            labelName: 'Имя',
            fieldName: 'first_name',
            type: 'text',
            placeholder: 'Иван'
          }),
          new FormField({
            labelName: 'Фамилия',
            fieldName: 'second_name',
            type: 'text',
            placeholder: 'Иванов'
          }),
          new FormField({
            labelName: 'Имя в чате',
            fieldName: 'display_name',
            type: 'text',
            placeholder: 'Иван'
          }),
          new FormField({
            labelName: 'Телефон',
            fieldName: 'phone',
            type: 'text',
            placeholder: '+7 (909) 967 30 30'
          })
        ]
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
      display_name: formData.get('display_name'),
      phone: formData.get('phone')
    }
    if(!this.props.form.onValid(form)) return
  }

  render() {
    const { form } = this.props
    const el = compile(formSetProfileTmpl,{
      form
    })
    return el
  }
}