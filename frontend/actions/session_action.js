import {
  postUser,
  postSession,
  deleteSession
} from '../util/session_api_util';
import { getUser } from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors.responseJSON,
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const signup = formUser => dispatch => postUser(formUser)
.then(
  user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err))
);

export const login = formUser => dispatch => postSession(formUser)
.then(
  user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err))
);

export const logout = () => dispatch => deleteSession()
.then(
  () => dispatch(logoutCurrentUser()),
  err => dispatch(receiveErrors(err))
);

export const getUserInfo = () => dispatch => getUser()
.then(
  user => dispatch(receiveUser(user))
);
