// Experimented with solution code for understanding.
var Friends = {
  _data: new Set(),

  items: function() {
    return _.chain([...Friends._data]);
  },

  isFriend: function(name) {
    return Friends._data.has(name);
  },

  toggleStatus: function(name, callback = () => {}) {
    if (Friends._data.has(name)) {
      Friends._data.delete(name);
      callback(false);
    } else {
      Friends._data.add(name);
      callback(true);
    }
  }
};

//original code we attempted to implement

// var Friends = {
//   toggleStatus: function() {
//     // $('.username').click(function() {
//     //   $('.username').toggleClass('.friend');
//     // });

//     MessagesView.$chats.on('click', '.username', function() {
//       $(this).toggleClass('.friend');
//     });
//   }
// };

// // do we need a jQuery click handler to pass the tests? SpecRunner invokes jQuery on #chats and a username class.

// //class="username"

// // $( "td" ).toggle(
// //   function() {
// //     $( this ).addClass( "selected" );
// //   }, function() {
// //     $( this ).removeClass( "selected" );
// //   }
// // );

// /**
// $("button").click(function(){
//   $("p").toggleClass("main");
// });
//  */
