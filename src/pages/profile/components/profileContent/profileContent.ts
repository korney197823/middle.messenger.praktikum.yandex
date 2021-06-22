import Block from '../../../../components/block/block'
import compile from '../../../../utils/compile'
import ProfileHeader from '../profileHeader/profileHeader'
import ProfileFooter from '../profileFooter/profileFooter'
import ProfileMain from '../profileMain/profileMain'

import { Props } from './types'
import { profileContentTmpl } from './profileContent.tmpl'

export default class ProfileContent extends Block<Props> {
  constructor() {
    super({
      header: new ProfileHeader(),
      main: new ProfileMain(),
      footer: new ProfileFooter()
    });
  }
  render() {
    const { header, main, footer } = this.props
    return compile(profileContentTmpl, {
      header,
      main,
      footer
    })
  }
}
