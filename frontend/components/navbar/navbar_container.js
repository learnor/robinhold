import { connect } from 'react-redux';

import { logout, getUserInfo } from '../../actions/session_action';
import Navbar from './navbar';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  // getUserInfo: () => dispatch(getUserInfo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
