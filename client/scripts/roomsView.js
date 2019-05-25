var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {},

  render: function() {},

  renderRoom: function(room) {
    if (!room) {
      room = 'main';
    }
    console.log(room);

    // $(room).appendChild(RoomsView.$select);

    this.$select.append('<option></option>');
    // $(Rooms.render(room)).appendTo(RoomsView.$select);
    // RoomsView.$select.appendTo(room);
  }
};
