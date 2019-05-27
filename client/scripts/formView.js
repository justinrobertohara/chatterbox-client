var FormView = {
  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // we might need to
    // console.log(FormView.$form.find('#message').val());

    var message = {
      username: App.username,
      text: FormView.$form.find('#message').val(),
      roomname: 'lobby'
    };

    Parse.create(message);
    // setTimeout(location.reload(true), 1000);

    // requires double-click to reload page and display submitted messag
    FormView.$form.on('click', function() {
      location.reload(true);
    });
  },

  //experimented with solution code for understanding && past our set hours
  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};
