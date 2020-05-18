import * as ActionTypes from '../actions/ActionTypes';
import {highOrderReducer} from 'api-request-biolerplate-actions';

const initialState = {
  cartItems: [],
  makeOrderSuccess: null,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS_' + 'fetchCartItems':
      return {
        ...state,
        cartItems: action.payload.data.items,
      };

    case 'SUCCESS_makeOrder':
      return {
        ...state,
        makeOrderSuccess: {},
      };

    default:
      return state;
  }
}

export default highOrderReducer(
  initialState,
  [
    {
      requestEndPoint: 'cart',
      baseActionType: 'fetchCartItems',
    },
    {
      requestEndPoint: 'order',
      requestMethod: 'post',
      baseActionType: 'makeOrder',
    },
  ],
  cartReducer,
);
