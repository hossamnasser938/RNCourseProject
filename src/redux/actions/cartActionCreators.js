import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const fetchCartItems = () => {
  return (dispatch, getState) => {
    axios.get('cart');
  };
};
