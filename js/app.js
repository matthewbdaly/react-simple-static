import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './components/Root';

export default function render(locals, callback) {
  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Root, locals))
  callback(null, '<!DOCTYPE html>' + html)
};
