import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import Root from './components/Root';
import Index from './components/Index';

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
  </Route>
)

module.exports = Routes;
