import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import newsReducer from './news_reducer';
import companyReducer from './company_reducer';

const entitiesReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
  company: companyReducer,
});

export default entitiesReducer;
