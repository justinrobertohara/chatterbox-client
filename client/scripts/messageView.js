// Renders username and text in divs
// Escapes input to protect against XSS attacks

var MessageView = {
  render: _.template(`
      <div class="chat">
        <div class="username">
          <%- username%>
        </div>
        <div><%-text%></div>
      </div>
    `)
};
