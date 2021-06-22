import Block from '../../components/block/block'
import compile from '../../utils/compile'
import ProfileContent from '../profile/components/profileContent/profileContent'

import { profileTmpl } from './profile.tmpl'
import { Props } from './types'
import './profile.sass'

export default class Profile extends Block<Props> {
  constructor() {
    super({
      content: new ProfileContent()
    }, 'div', '.app');
  }
  render() {
    const { content } = this.props;
    console.log(content)
    return compile(profileTmpl, {
      content
    })
  }

}