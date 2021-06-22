import Block from '../../../../components/block/block'
import compile from '../../../../utils/compile'
import { sidebarHeaderTmpl } from './sidebarHeader.tmpl'

export default class SidebarHeader extends Block<Record<string, unknown>> {
  constructor() {
    super({});
  }

  render() {
    return compile(sidebarHeaderTmpl, {})
  }

}