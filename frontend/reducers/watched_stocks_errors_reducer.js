import { merge } from 'lodash';

import {
  RECEIVE_WATCHED_STOCK_ERRORS
} from '../actions/watched_stock_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WATCHED_STOCK_ERRORS:
      return merge([], state, action.errors);
    default:
      return state;
  }
};
