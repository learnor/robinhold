import { connect } from 'react-redux';
import { getCompany } from '../../actions/company_actions';

import { addWatchedStock, removeWatchedStock } from
'../../actions/watched_stock_actions';
import Watch from './watch';

const mapStateToProps = (state, ownProps) => ({
  company: state.entities.company
});

const mapDispatchToProps = dispatch => ({
  watch: companyId => dispatch(addWatchedStock(companyId)),
  getCompany: id => dispatch(getCompany(id)),
  unwatch: id => dispatch(removeWatchedStock(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watch);
