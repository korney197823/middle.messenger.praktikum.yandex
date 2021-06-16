export const yourMessageTmpl = `
li.common-message.is-time
  time !{time}
li.common-message(class='is-other')
  p.common-message-text !{text}
    time.common-message-date(datetime='') !{time}
`