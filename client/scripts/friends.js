var Friends = {
  toggleStatus: function() {
    // $('.username').click(function() {
    //   $('.username').toggleClass('.friend');
    // });

    $chats.on('click', '.username', function() {
      $(this).toggleClass('.friend');
    });
  }
};

// do we need a jQuery click handler to pass the tests? SpecRunner invokes jQuery on #chats and a username class.

//class="username"

// $( "td" ).toggle(
//   function() {
//     $( this ).addClass( "selected" );
//   }, function() {
//     $( this ).removeClass( "selected" );
//   }
// );

/**
$("button").click(function(){
  $("p").toggleClass("main");
});
 */
