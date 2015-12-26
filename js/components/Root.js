var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Root = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <h1>Test</h1>
        </body>
      </html>
    )
  }
});

module.exports = Root;
