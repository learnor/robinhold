import { connect } from 'react-redux';

import NewsIndex from './news_index';
import { getNews, getAllNews } from '../../actions/news_actions';

const mapStateToProps = state => ({
  news: Object.values(state.entities.news),
  errors: state.errors.news,
});

const mapDispatchToProps = dispatch => ({
  getNews: id => dispatch(getNews(id)),
  getAllNews: () => dispatch(getAllNews()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsIndex);
