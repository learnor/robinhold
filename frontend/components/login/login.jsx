import React from 'react';
import LoginFormContainer from './login_form_container';
import { AuthRoute } from '../../util/route_util';

const Login = () => (
  <div className="login-page">
    <div className="login-image"></div>
    <AuthRoute path="/" component={LoginFormContainer} />
  </div>
);
export default Login;
