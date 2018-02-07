import { merge } from 'lodash';

import {
  RECEIVE_NEWS_ERRORS
} from '../actions/news_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEWS_ERRORS:
      return merge([], state, action.errors);
    default:
      return state;
  }
};
