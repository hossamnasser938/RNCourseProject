import {SET_TOKEN, SET_USER} from './ActionTypes';

export const setToken = token => ({
  type: SET_TOKEN,
  payload: {token},
});

export const setUser = user => ({
  type: SET_USER,
  payload: {user},
});
