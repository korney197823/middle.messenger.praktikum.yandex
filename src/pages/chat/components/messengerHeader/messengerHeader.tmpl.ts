export const messengerHeaderTmpl = `
header.message-header
  .message-header-wrap
    .current-message-author
      .author-avatar
      .author-name
        span.author-name-text Илья
    nav.message-nav
      button#set-user.btn.btn-set-user
        span.btn-set-user.top
        span.btn-set-user.center
        span.btn-set-user.bottom
      .set-user-modal
        a.set-user-link.add(href='#') Добавить пользователя
        a.set-user-link.delete(href='#') Удалить пользователя
`