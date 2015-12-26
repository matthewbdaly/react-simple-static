import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './components/Root';
import Index from './components/Index';

var Routes = (
  <Route component={Root} path='/'>
    <IndexRoute component={Index} />
  </Route>
)

module.exports = Routes;
