import Block from '../../components/block/block'
import FormSetProfile from './components/formSetProfile/formSetProfile'
import compile from '../../utils/compile'

import { setProfileTmpl } from './setProfile.tmpl'
import { Props } from './types'

export default class SetProfile extends Block<Props> {
  constructor() {
    super({
      form: new FormSetProfile()
    }, 'div', '.app');
  }
  render() {
    const { form } =this.props
    return compile(setProfileTmpl, {
      form
    })
  }
}