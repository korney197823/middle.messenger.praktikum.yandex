import Block from '../../../../components/block/block'
import compile from '../../../../utils/compile'

import './chatListItem.sass'
import { Props } from './types'
import chatListItemTmpl from './chatListItem.tmpl'

export default class ChatListItem extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      avatar, name, date, status, text, countUnreadMessage
    } = this.props
    return compile(chatListItemTmpl, {
      avatar,
      name,
      date,
      status,
      text,
      countUnreadMessage
    })
  }

}

