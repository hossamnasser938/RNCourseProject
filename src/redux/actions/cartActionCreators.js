import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import {totalSelector} from '../selectors';

export const fetchCartItems = () => {
  return (dispatch, getState) => {
    axios.get('cart');
  };
};

const setAddingProductToCart = productId => ({
  type: ActionTypes.SET_ADDING_PRODUCT_TO_CART,
  payload: {productId},
});

const clearAddingProductToCart = productId => ({
  type: ActionTypes.CLEAR_ADDING_PRODUCT_TO_CART,
  payload: {productId},
});

const addProductToCartError = erorCode => ({
  type: ActionTypes.ADD_PRODUCT_TOCART_ERROR,
  payload: {erorCode},
});

export const updateCartItemImmediately = (cartItemId, action) => ({
  type: ActionTypes.UPDATE_CART_ITEM_IMMEDIATELY,
  payload: {cartItemId, action},
});

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

export const addToCart = (productId, cost, count) => {
  return (dispatch, getState) => {
    dispatch(setAddingProductToCart(productId));
    axios
      .post('cart', {product: productId, cost, count})
      .then(res => {
        dispatch(fetchCartItems());
      })
      .catch(err => {
        dispatch(addProductToCartError());
      })
      .finally(() => {
        dispatch(clearAddingProductToCart(productId));
      });
  };
};

export const updateCartItem = (cartItemId, action, count) => {
  return (dispatch, getState) => {
    dispatch(updateCartItemImmediately(cartItemId, action));

    axios.put('cart', {id: cartItemId, action, count}).catch(err => {
      dispatch(fetchCartItems());
      dispatch(addProductToCartError());
    });
  };
};
