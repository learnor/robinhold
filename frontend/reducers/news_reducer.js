import { merge } from 'lodash';

import {
  RECEIVE_NEWS,
  RECEIVE_ALL_NEWS,
  RECEIVE_API_NEWS,
  RECEIVE_NEWS_ERRORS,
} from '../actions/news_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_NEWS:
      return action.allNews;
    case RECEIVE_API_NEWS:
      return action.news;
    case RECEIVE_NEWS:
      return merge([], state, action.news);
    default:
      return state;
  }
};
