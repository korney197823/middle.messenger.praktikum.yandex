import Block from '../../../../components/block/block'
import ProfileListItem from '../profileListItem/profileListItem'
import compile from '../../../../utils/compile'

import { Props } from './types'
import { profileMainTmpl } from './profileMain.tmpl'

export default class ProfileMain extends Block<Props> {
  constructor() {
    super({
      items: [
        new ProfileListItem({
          name: 'Почта',
          value: 'pochta@yandex.ru'
        }),
        new ProfileListItem({
          name: 'Логин',
          value: 'ivanivanov'
        }),
        new ProfileListItem({
          name: 'Имя',
          value: 'Иван'
        }),
        new ProfileListItem({
          name: 'Фамилия',
          value: 'Иванов'
        }),
        new ProfileListItem({
          name: 'Имя в чате',
          value: 'Иван'
        }),
        new ProfileListItem({
          name: 'Телефон',
          value: '+7 (909) 967 30 30'
        }),
      ]
    });

  }
  render() {
    const { items } = this.props
    return compile(profileMainTmpl, {
      items
    })
  }

}