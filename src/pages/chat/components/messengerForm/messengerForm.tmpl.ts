export const messengerFormTmpl = `
form#message-box.message-box
  button.btn.btn-message-box.attach
    span.icon.icon-attach
  label(for='message')
    input#message(type='text' placeholder='Сообщение' name='message')
  button.btn.btn-message-box.send
    span.icon.icon-send
      svg.arrow-right-4(viewBox='0 0 100 85')
        polygon(points='58.263,0.056 100,41.85 58.263,83.641 30.662,83.641 62.438,51.866 0,51.866 0,31.611 62.213,31.611 30.605,0 58.263,0.056')
`