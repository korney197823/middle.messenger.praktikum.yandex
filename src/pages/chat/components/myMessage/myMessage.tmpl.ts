export const myMessageTmpl = `
li.common-message(class='is-you')
  p.common-message__text !{text}
    .common-message__info
      span.common-message__status_left.is-seen &#1003;
      span.common-message__status_right.is-seen &#1003;
    time.common-message__date(datetime='') !{time}
`