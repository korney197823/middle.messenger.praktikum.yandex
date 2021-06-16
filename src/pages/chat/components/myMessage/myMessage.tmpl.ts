export const myMessageTmpl = `
li.common-message.is-time
  time !{time}
li.common-message(class='is-you')
  p.common-message-text !{text}
    .common-message-info
      span.status.left.is-seen &#1003;
      span.status.right.is-seen &#1003;
    time.common-message-date(datetime='') !{time}
`