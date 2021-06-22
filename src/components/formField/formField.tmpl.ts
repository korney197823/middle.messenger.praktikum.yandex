const formFieldTmpl = `
.form-group
  label.form-label(for=fieldName) #{labelName}
  input.input(type=type name=fieldName id=fieldName placeholder=placeholder value=fieldValue)
  p.error-text #{errorText}
`
export default formFieldTmpl;