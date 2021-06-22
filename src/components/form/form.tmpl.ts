const formTmpl = `
.form-card
  h1.title.title_form !{title}
  form#form-auth.form-auth(action='#')
    | !{content}
    .form-group
      button.btn.btn_auth(type='submit') !{text}
      if isLink
        a.link(href=href) !{linkText}
`
export default formTmpl