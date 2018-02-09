import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import newsErrorsReducer from './news_errors_reducer';
import watchedStocksErrorsReducer from './watched_stocks_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  news: newsErrorsReducer,
  watchedStock: watchedStocksErrorsReducer,
});

export default errorsReducer;
