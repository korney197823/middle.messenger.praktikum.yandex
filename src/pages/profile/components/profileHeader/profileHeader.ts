import Block from '../../../../components/block/block'
import compile from '../../../../utils/compile'

import { profileHeaderTmpl } from './profileHeader.tmpl'

export default class ProfileHeader extends Block<Record<string, unknown>> {
  constructor() {
    super({});
  }
  render() {
    return compile(profileHeaderTmpl, {})
  }
}