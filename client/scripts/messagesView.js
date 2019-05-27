var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {},

  renderMessage: function(message) {
    $(MessageView.render(message)).appendTo(MessagesView.$chats);
  },

  handleClick: function(event) {
    var username = $(event.target).data('username');
    if (username === undefined) {
      return;
    }
    Friends.toggleStatus(username, MessagesView.render);

    $(event.target).toggleClass('friend');
  }
};


