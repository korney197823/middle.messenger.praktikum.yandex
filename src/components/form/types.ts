import formField from '../formField/formField'

export type Props = {
  title: string
  content: formField[]
  text?: string
  isLink?: boolean
  href?: string
  linkText?: string
  events?: any
}