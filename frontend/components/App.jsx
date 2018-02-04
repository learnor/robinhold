import React, {Fragment} from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePage from './home/home_page';
import SessionFormContainer from './session/session_form_container';
import Login from '../components/login/login';

const App = () => (
  <Fragment>
    <Switch>
      <AuthRoute path="/login" component={Login} />
      <ProtectedRoute path="/" component={HomePage} />
    </Switch>
  </Fragment>
);

export default App;
