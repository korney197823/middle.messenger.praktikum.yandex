import {
  emptyValid, loginValid, emailValid, passwordValid, phoneValid
} from '../../utils/validator'
import { ValidResult } from '../../utils/types'

export const VALIDATOR: Record<string, (value: string, valueTwo?: string) => ValidResult> = {
  email: emailValid,
  login: loginValid,
  first_name: emptyValid,
  second_name: emptyValid,
  display_name: emptyValid,
  phone: phoneValid,
  oldPassword: passwordValid,
  password: passwordValid,
  confirmPassword: passwordValid
}