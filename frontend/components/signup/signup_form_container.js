import { connect } from 'react-redux';

import { signup } from '../../actions/session_action';
import SignupForm from './signup_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
