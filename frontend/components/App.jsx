import React, {Fragment} from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePage from './home/home_page';
import SessionFormContainer from './session/session_form_container';
import Login from '../components/login/login';
import Signup from '../components/signup/signup';

const App = () => (
  <Fragment>
    <Switch>
      <AuthRoute path="/login" component={Login} />
      <AuthRoute path="/signup" component={Signup} />
      <ProtectedRoute path="/" component={HomePage} />
    </Switch>
  </Fragment>
);

export default App;
