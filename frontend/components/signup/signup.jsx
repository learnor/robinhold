import React from 'react';

import { AuthRoute } from '../../util/route_util';
import SignupFormContainer from './signup_form_container';

const Signup = () => (
  <div className="signup-page">
    <header>
    <h2>Let's get started</h2>
    </header>
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <footer>
    </footer>
  </div>
);

export default Signup;
