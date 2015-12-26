var React = require('react')
var ReactDOMServer = require('react-dom/server');
var Root = require('./components/Root')

module.exports = function render(locals, callback) {
  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Root, locals))
  callback(null, '<!DOCTYPE html>' + html)
}
