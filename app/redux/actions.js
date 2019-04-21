import {
  REQUEST_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REQUEST_LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  SET_USER,
} from './constants';

export function signup(email, passwordOne, passwordTwo) {
  return {
    type: REQUEST_SIGNUP,
    email,
    passwordOne,
    passwordTwo,
  };
}

export function signupSuccess(email, password) {
  return {
    type: SIGNUP_SUCCESS,
    email,
    password,
  };
}

export function signupError(error) {
  return {
    type: SIGNUP_ERROR,
    error,
  };
}

export function login(email, password) {
  return {
    type: REQUEST_LOGIN,
    email,
    password,
  };
}

export function loginSuccess(authUser) {
  return {
    type: LOGIN_SUCCESS,
    authUser,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

export function logout() {
  return {
    type: REQUEST_LOGOUT,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function logoutError(error) {
  return {
    type: LOGOUT_ERROR,
    error,
  };
}

export function setUser() {
  return {
    type: SET_USER,
  };
}
