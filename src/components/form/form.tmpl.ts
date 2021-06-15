const formTmpl = `
.form-card
  h1.title.title-form !{title}
  form#form-auth.form-auth(action='#')
    | !{content}
    .form-group
      button.btn.btn-auth(type='submit') !{text}
      if isLink
        a.link(href=href) !{linkText}
`
export default formTmpl