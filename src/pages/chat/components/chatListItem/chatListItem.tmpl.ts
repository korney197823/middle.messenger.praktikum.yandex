const chatListItemTmpl = `
li.chat-list-item
  .chat-list-item__wrap
    .chat-list-item__avatar
    .chat-list-item__content-wrap
      .chat-list-item__info
        span.chat-list-item__author !{name}
        .chat-list-item__time
          span !{date}
      .chat-list-item__content
        .chat-list-item__text
          if status === 'self'
            spanchat-list-item__text_self  Вы:
            span !{text}
          else
            span !{text}
        if countUnreadMessage > 0
          chat-list-item__unread
            span !{countUnreadMessage}
`
export default chatListItemTmpl;