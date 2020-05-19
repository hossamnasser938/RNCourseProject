import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import {
  USER_KEY,
  TOKEN_KEY,
  SELECTED_ADDRESS_ID_KEY,
} from '../../utils/constants';
import AsyncStorage from '@react-native-community/async-storage';
import {
  UNEXPECTED_ERROR_CODE,
  WRONG_CODE_ERROR_CODE,
} from '../../utils/errorCodes';

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

const signInFaliure = errorCode => ({
  type: ActionTypes.SIGNIN_FAILURE,
  payload: {errorCode},
});

const confirmCodeStart = () => ({type: ActionTypes.CONFIRM_CODE_START});

const confirmCodeSuccess = () => ({type: ActionTypes.CONFIRM_CODE_SUCCESS});

const confirmCodeFaliure = errorCode => ({
  type: ActionTypes.CONFIRM_CODE_FAILURE,
  payload: {errorCode},
});

export const clearReduxData = () => ({type: ActionTypes.CLEAR_REDUX_DATA});

export const signIn = phone => {
  return (dispatch, getState) => {
    dispatch(signInStart());
    axios
      .post('/verify', {phone})
      .then(res => {
        dispatch(signInSuccess());
        // console.log(res.data);
        alert('code: ' + res.data.code);
      })
      .catch(err => {
        dispatch(signInFaliure(UNEXPECTED_ERROR_CODE));
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
        const errorCode = err.message.includes('401')
          ? WRONG_CODE_ERROR_CODE
          : UNEXPECTED_ERROR_CODE;
        dispatch(confirmCodeFaliure(errorCode));
      });
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    axios.defaults.headers.Authorization = undefined;
    AsyncStorage.clear();
    dispatch(clearReduxData());
  };
};

export const getUserData = () => {
  return (dispatch, getState) => {
    axios.get('/user/get-data').then(res => {
      dispatch(setUser(res.data.userData));
    });
  };
};

export const updateUserName = name => {
  return (dispatch, getState) => {
    axios.put('/user/change-name', {name}).then(res => {
      dispatch(getUserData());
    });
  };
};

export const addAddress = ({name, phone, city, area, street, building}) => {
  return (dispatch, getState) => {
    axios
      .post('/address', {name, phone, city, area, street, building})
      .then(res => {
        dispatch(getUserData());
        dispatch(selectAddress(res.data._id));
      });
  };
};

export const addressSelected = addressId => ({
  type: ActionTypes.ADDRESS_SELECTED,
  payload: {addressId},
});

export const selectAddress = addressId => {
  return (dispatch, getState) => {
    AsyncStorage.setItem(SELECTED_ADDRESS_ID_KEY, addressId);

    dispatch(addressSelected(addressId));
  };
};

export const getOrders = () => {
  return (dispatch, getState) => {
    axios.get('/order');
  };
};
