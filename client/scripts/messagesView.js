var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {},

  render: function() {},

  renderMessage: function(message) {
    $(MessageView.render(message)).appendTo(MessagesView.$chats);
  }
};
