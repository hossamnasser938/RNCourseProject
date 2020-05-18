import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import {totalSelector} from '../selectors';

export const fetchCartItems = () => {
  return (dispatch, getState) => {
    axios.get('cart');
  };
};

export const makeOrder = () => {
  return (dispatch, getState) => {
    const selectedAddressId = getState().auth.selectedAddressId;
    const items = getState().cart.cartItems.map(item => item._id);
    const total = totalSelector(getState());

    axios.post('/order', {
      paymenMethod: 1,
      items,
      shippingAddress: selectedAddressId,
      totalCost: total,
    });
  };
};
