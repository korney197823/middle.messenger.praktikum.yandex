import Block from '../../../../components/block/block'
import compile from '../../../../utils/compile'

import { profileFooterTmpl } from './profileFooter.tmpl'

export default class ProfileFooter extends Block<Record<string, unknown>> {
  constructor() {
    super({});
  }

  render() {
    return compile(profileFooterTmpl, {})
  }

}