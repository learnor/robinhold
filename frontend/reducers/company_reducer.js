import { merge } from 'lodash';

import {
  RECEIVE_COMPANY,
  RECEIVE_COMPANY_ERRORS,
} from '../actions/company_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMPANY:
      return action.company;
    default:
      return state;
  }
};
