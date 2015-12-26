import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './components/Root';
import Routes from './routes';
import { createHistory, createMemoryHistory } from 'history';
import { Router, RoutingContext, match } from 'react-router';

export default function render(locals, callback) {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Root, locals))
  callback(null, '<!DOCTYPE html>' + html)
};
