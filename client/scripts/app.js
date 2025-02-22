var App = {
  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // Get new messages every second
    // setInterval(App.fetch, 1000);
  },

  fetch: function(callback = () => {}) {
    Parse.readAll(data => {
      // examine the response from the server request:
      console.log(data.results);

      data.results.forEach(message => {
        if (message.username && message.text && message.roomname) {
          MessagesView.renderMessage({
            username: message['username'],
            text: message['text'],
            roomname: message['roomname']
          });
        }
      });
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
