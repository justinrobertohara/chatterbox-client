var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
    MessagesView.renderMessage();
  },

  // render all messages
  render: function() {
    // data structure to store the message is "results"

    App.fetch(MessagesView.renderMessage);
  },

  // render particular message
  renderMessage: function(message) {
    // go into messageView
    // edge case
    if (message.username === null || message.text === null) {
      console.log('usernames and/or text is null');
      return;
    }

    // use render method with template literals for chat, username, message
    var chat = MessageView.render(message);
    // add to DOM (append or prepend)
    this.$chats.prepend(chat);
  }
};
