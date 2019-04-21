import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.get('global', initialState);

const makeSelectLoading = () =>
  createSelector(selectGlobal, loading => loading.get('loading'));

const makeSelectAuthUser = () =>
  createSelector(selectGlobal, authUser => authUser.get('authUser'));

const makeSelectError = () =>
  createSelector(selectGlobal, error => error.get('error'));

export { selectGlobal, makeSelectAuthUser, makeSelectLoading, makeSelectError };
