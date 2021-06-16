import Block from '../../../../components/block/block'
import ChatList from '../chatList/chatList'
import compile from '../../../../utils/compile'
import { Props } from './types'
import { chatContainerTmpl } from './chatContainer.tmpl'

export default class ChatContainer extends Block<Props> {
  constructor() {
    super({
      chatList: new ChatList()
    });
  }

  render() {
    const { chatList } = this.props;
    return compile(chatContainerTmpl, {
      chatList
    })
  }
}