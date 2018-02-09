import { merge } from 'lodash';

import {
  RECEIVE_WATCHED_STOCK,
  RECEIVE_WATCHED_STOCKS,
  RECEIVE_WATCHED_STOCK_ERRORS,
} from '../actions/watched_stock_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WATCHED_STOCKS:
      return action.watchedStocks;
    case RECEIVE_WATCHED_STOCK:
      return merge({}, state, {[action.watchedStock.id]: action.watchedStock});
    default:
      return state;
  }
};
