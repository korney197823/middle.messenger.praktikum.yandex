import Block from '../../../../components/block/block'
import ChatListItem from '../chatListItem/chatListItem';
import SidebarHeader from '../sidebarHeader/sidebarHeader'
import compile from '../../../../utils/compile'

import { Props } from './types'
import { chatListTmpl } from './chatList.tmpl'

export default class ChatList extends Block<Props> {
  constructor() {
    super({
      sidebarHeader: new SidebarHeader(),
      items: [
        new ChatListItem({
          avatar: '../../images/avatar.png',
          name: 'Андрей',
          date: '10:42',
          text: 'Изображение',
          status: 'it',
          countUnreadMessage: 2
        }),
        new ChatListItem({
          avatar: '../../images/avatar.png',
          name: 'Киноклуб',
          date: '12:42',
          text: 'Стикер',
          status: 'self',
          countUnreadMessage: 0
        }),
        new ChatListItem({
          avatar: '../../images/avatar.png',
          name: 'Илья',
          date: '15:12',
          text: 'Друзья, у меня для вас особенный выпуск новостей!',
          status: 'it',
          countUnreadMessage: 4
        })
      ]
    });
  }
  render() {
    const{ sidebarHeader, items } = this.props
    return compile(chatListTmpl, {
      sidebarHeader,
      items
    })
  }

}