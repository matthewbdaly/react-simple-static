import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './components/Root';
import Index from './components/Index';

const Routes = (
  <Route component={Root} path='/'>
    <IndexRoute component={Index} />
  </Route>
);

export default Routes;
