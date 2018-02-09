import { connect } from 'react-redux';

import { login, receiveErrors } from '../../actions/session_action';
import LoginForm from './login_form';

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
