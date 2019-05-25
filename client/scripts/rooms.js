var Rooms = {
  // escape input with %- % syntax
  render: _.template(`
    <div id="rooms">
    <%- room%>
  </div>
    `)
};
