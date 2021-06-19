export function emptyValid(value: string) {
  const result = {
    isValid: true,
    errorText: ''
  }
  if (!value) {
    result.isValid = false;
    result.errorText = 'Поле обязательно для заполнения'
    return result
  }
  result.isValid = true
  result.errorText = ''
  return result;
}
export function loginValid(value: string) {
  const result = {
    isValid: true,
    errorText: ''
  }
  if (!emptyValid(value).isValid) {
    return emptyValid(value)
  }
  result.isValid = true;
  result.errorText = ''
  return result;
}
export function emailValid(value: string) {
  const result = {
    isValid: true,
    errorText: ''
  }
  if (!emptyValid(value).isValid) {
    return emptyValid(value)
  }

  const regExp = /[a-zA-Z-\._]*@[a-zA-Z]*\.[a-zA-Z]*/gi
  if (!regExp.test(value)) {
    result.isValid = false;
    result.errorText = 'Введите правильный адрес эл.почты'
    return result;
  }
  result.isValid = true;
  result.errorText = ''
  return result;
}
export function passwordValid(password: string, confirmPassword?: string) {
  const result = {
    isValid: true,
    errorText: ''
  }
  if(!emptyValid(password).isValid) {
    return emptyValid(password)
  }
  if (password.length < 5 || password.length > 8) {
    result.isValid = false
    result.errorText = 'Длина пароля должна быть от 5 до 8 символов'
    return result
  }
  if(confirmPassword && password !== confirmPassword) {
    result.isValid = false;
    result.errorText = 'Пароли не совпадают'
    return result
  }
  result.isValid = true;
  result.errorText = ''
  return result;
}
export function phoneValid(value: string) {
  const result = {
    isValid: true,
    errorText: ''
  }
  if (!emptyValid(value).isValid) {
    return emptyValid(value)
  }
  const regExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

  if (!regExp.test(value)) {
    result.isValid = false;
    result.errorText = 'Номер телефона заполнен некорректно'
    return result
  }
  result.isValid = true;
  result.errorText = '';
  return result
}