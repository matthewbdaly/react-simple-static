import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './components/Root';
import routes from './routes';
import { createHistory, createMemoryHistory } from 'history';
import { Router, RoutingContext, match } from 'react-router';

export default function render(locals, callback) {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    var html = ReactDOMServer.renderToStaticMarkup(<RoutingContext {...renderProps} />);
    callback(null, '<!DOCTYPE html>' + html);
  });
};
