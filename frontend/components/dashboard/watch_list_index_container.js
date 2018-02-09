import { connect } from 'react-redux';

import { getUserInfo } from '../../actions/session_action';
import WatchListIndex from './watch_list_index';

const mapStateToProps = state => ({
  companies: state.entities.user.watched_companies || [],
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(getUserInfo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchListIndex);
