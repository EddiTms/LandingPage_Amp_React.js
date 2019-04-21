import { fromJS } from 'immutable';

import {
  REQUEST_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REQUEST_LOGOUT,
  SET_USER,
} from './constants';

export const initialState = fromJS({
  loading: false,
  authUser: false,
  error: '',
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SIGNUP:
      return state
        .set('loading', true)
        .set('authUser', false)
        .set('error', '');

    case SIGNUP_SUCCESS:
      return state
        .set('loading', true)
        .set('authUser', false)
        .set('error', '');

    case SIGNUP_ERROR:
      return state
        .set('loading', false)
        .set('authUser', false)
        .set('error', 'Signup failed');

    case REQUEST_LOGIN:
      return state
        .set('loading', true)
        .set('authUser', false)
        .set('error', '');

    case LOGIN_SUCCESS: {
      localStorage.setItem('authUser', JSON.stringify(action.authUser.data));
      return state
        .set('loading', false)
        .set('authUser', action.authUser.data)
        .set('error', '');
    }

    case LOGIN_ERROR:
      return state
        .set('loading', false)
        .set('authUser', false)
        .set('error', 'Login failed');

    case SET_USER:
      // eslint-disable-next-line no-case-declarations
      let authUser = localStorage.getItem('authUser');
      authUser = authUser ? JSON.stringify(authUser) : null;
      return state
        .set('loading', false)
        .set('authUser', JSON.parse(authUser))
        .set('error', '');

    case REQUEST_LOGOUT:
      localStorage.removeItem('authUser');
      return state
        .set('loading', false)
        .set('authUser', false)
        .set('error', '');

    default:
      return state;
  }
}

export default authReducer;
