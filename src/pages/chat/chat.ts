import Block from '../../components/block/block'
import ChatContainer from '../chat/components/chatContainer/chatContainer'
import compile from '../../utils/compile'
import './chat.sass'
import { Props } from './types'
import { chatTmpl } from './chat.tmpl'

export default class Chat extends Block<Props> {
  constructor() {
    super({
      chatContainer: new ChatContainer()
    }, 'div', '.app');
  }
  render() {
    const { chatContainer } = this.props
    return compile(chatTmpl, {
      chatContainer
    })
  }
}