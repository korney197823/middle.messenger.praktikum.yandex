import MyMessage from '../myMessage/myMessage';
import YourMessage from '../yourMessage/yourMessage'

export type Props = {
  messages: [] | (MyMessage | YourMessage)[]
}