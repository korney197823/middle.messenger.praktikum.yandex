const chatListItemTmpl = `
li.chat-list-item
  .chat-item-wrap
    .chat-item-avatar
    .chat-item-content-wrap
      .chat-item-info
        span.chat-item-author !{name}
        .chat-item-time
          span !{date}
      .chat-item-content
        .chat-item-text
          if status === 'self'
            span.chat-item-text-self  Вы:
            span !{text}
          else
            span !{text}
        if countUnreadMessage > 0
          .chat-item-unread
            span !{countUnreadMessage}
`
export default chatListItemTmpl;