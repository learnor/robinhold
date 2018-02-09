import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';
import Dashboard from '../dashboard/dashboard';
import NavbarContainer from '../navbar/navbar_container';

export default () => (
  <div className="home-page">
  <NavbarContainer />
    <Switch>
      <ProtectedRoute path="/" component={Dashboard} />
    </Switch>
  <footer>I am footer</footer>
  </div>
);
