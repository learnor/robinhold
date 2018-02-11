import { connect } from 'react-redux';

import NewsIndex from './news_index';
import { getNews, getAllNews, getAPINews } from '../../actions/news_actions';

const mapStateToProps = state => ({
  news: state.entities.news,
  errors: state.errors.news,
});

const mapDispatchToProps = dispatch => ({
  getNews: id => dispatch(getNews(id)),
  getAllNews: () => dispatch(getAllNews()),
  getAPINews: (cat, q) => dispatch(getAPINews(cat, q)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsIndex);
