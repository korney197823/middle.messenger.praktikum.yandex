import Block from '../../../../components/block/block'
import compile from '../../../../utils/compile'

import { Props } from './types'
import './profileListItem.sass'
import { profileListItemTmpl } from './profileListItem.tmpl'

export default class ProfileListItem extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { name, value } = this.props
    return compile(profileListItemTmpl, {
      name,
      value,
    })
  }
}
