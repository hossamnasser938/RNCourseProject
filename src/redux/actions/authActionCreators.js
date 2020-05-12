import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import {USER_KEY, TOKEN_KEY} from '../../utils/constants';
import AsyncStorage from '@react-native-community/async-storage';

export const setToken = token => ({
  type: ActionTypes.SET_TOKEN,
  payload: {token},
});

export const setUser = user => ({
  type: ActionTypes.SET_USER,
  payload: {user},
});

const signInStart = () => ({type: ActionTypes.SIGNIN_START});

const signInSuccess = () => ({type: ActionTypes.SIGNIN_SUCCESS});

const signInFaliure = () => ({type: ActionTypes.SIGNIN_FAILURE});

const confirmCodeStart = () => ({type: ActionTypes.CONFIRM_CODE_START});

const confirmCodeSuccess = () => ({type: ActionTypes.CONFIRM_CODE_SUCCESS});

const confirmCodeFaliure = () => ({type: ActionTypes.CONFIRM_CODE_FAILURE});

export const signIn = phone => {
  return (dispatch, getState) => {
    dispatch(signInStart());
    axios
      .post('/verify', {phone})
      .then(res => {
        dispatch(signInSuccess());
        console.log(res.data);
      })
      .catch(err => {
        dispatch(signInFaliure);
        console.log('error', err);
      });
  };
};

export const confirmCode = (phone, code) => {
  return (dispatch, getState) => {
    dispatch(confirmCodeStart());
    axios
      .post('/verify/validate', {phone, code})
      .then(res => {
        dispatch(confirmCodeSuccess());
        console.log(res.data);
        const {token, userData} = res.data;
        axios.defaults.headers.Authorization = 'Bearer ' + token;
        dispatch(setToken(token));
        dispatch(setUser(userData));
        AsyncStorage.setItem(TOKEN_KEY, token);
        AsyncStorage.setItem(USER_KEY, JSON.stringify(userData));
      })
      .catch(err => {
        dispatch(confirmCodeFaliure());
        console.log('error', err);
      });
  };
};
