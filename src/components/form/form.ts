import Block from '../block/block'
import compile from '../../utils/compile'
import formTmpl from './form.tmpl'
import { Props } from './types'

type RelatedData = {
  key: string,
  value: string
}

export default class Form extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  onValid(formData: Record<string, FormDataEntryValue | null>, relatedData?: RelatedData) {
    let isValidForm = true
    let relatedValue = ''

    this.props.content.forEach((item) => {
      if (item.props.fieldName === relatedData?.key) {
        relatedValue = relatedData.value
      }
      item.onUpdate(item.props.fieldName, formData[item.props.fieldName], relatedValue)
      if (!item.props.isValid) {
        isValidForm = false
      }
    })
    return isValidForm;
  }
  
  render() {
    const {
      title, content, text, isLink = false, href, linkText
    } = this.props
    return compile(formTmpl, {
      title, content, text, isLink, href, linkText
    })
  }
  
}