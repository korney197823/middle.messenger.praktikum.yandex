import Block from '../../../../components/block/block'
import ChatList from '../chatList/chatList'
import Messenger from '../messenger/messenger'
import compile from '../../../../utils/compile'
import { Props } from './types'
import { chatContainerTmpl } from './chatContainer.tmpl'

export default class ChatContainer extends Block<Props> {
  constructor() {
    super({
      chatList: new ChatList(),
      messenger: new Messenger()
    });
  }

  render() {
    const { chatList, messenger } = this.props;
    return compile(chatContainerTmpl, {
      chatList,
      messenger
    })
  }
}