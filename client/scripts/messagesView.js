// Calls MessagesView.render() method
// Renders all message
// Calls MessagesView.renderMessage() method
// Renders particular message

var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
    MessagesView.renderMessage();
  },

  // render all messages
  render: function(messages) {
    // data structure to store the message is "results"
    // POSSIBLE APPROACH #1
    // App.fetch(MessagesView.renderMessage);
    // POSSIBLE APPROACH #2
    // messages.forEach(message => {
    //   if (message.username !== undefined || message.text !== undefined) {
    //     $(MessageView.render(message).appendTo(MessagesView.$chats));
    //   }
    // });
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
