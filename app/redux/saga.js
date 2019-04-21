import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { REQUEST_LOGIN, REQUEST_SIGNUP, SIGNUP_SUCCESS } from './constants';
import {
  loginSuccess,
  loginError,
  signupSuccess,
  signupError,
} from './actions';

const config = {
  baseUrl: 'http://95.46.44.18:8080/api/v1',
};

export function* login(params) {
  const url = `${config.baseUrl}/authorization/login`;
  const formData = new FormData();

  formData.append('email', params.email);
  formData.append('password', params.password);

  try {
    const authUser = yield call(request, url, {
      method: 'POST',
      body: formData,
    });
    yield put(loginSuccess(authUser));
  } catch (err) {
    yield put(loginError(err));
  }
}

export function* signup(params) {
  const url = `${config.baseUrl}/authorization/register`;
  const formData = new FormData();

  formData.append('email', params.email);
  formData.append('account_number', 1);
  formData.append('password', params.passwordOne);
  formData.append('repeat_password', params.passwordTwo);

  try {
    yield call(request, url, {
      method: 'POST',
      body: formData,
    });
    yield put(signupSuccess(params.email, params.passwordOne));
  } catch (err) {
    yield put(signupError(err));
  }
}

export function* afterSignup(params) {
  try {
    yield call(login, { email: params.email, password: params.password });
  } catch (err) {
    yield put(loginError(err));
  }
}

export default function* auth() {
  yield [
    takeLatest(REQUEST_LOGIN, login),
    takeLatest(REQUEST_SIGNUP, signup),
    takeLatest(SIGNUP_SUCCESS, afterSignup),
  ];
}
