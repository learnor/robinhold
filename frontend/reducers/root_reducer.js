import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import newsReducer from './news_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  news: newsReducer,
});
