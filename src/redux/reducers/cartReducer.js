import * as ActionTypes from '../actions/ActionTypes';
import {highOrderReducer} from 'api-request-biolerplate-actions';

const initialState = {
  cartItems: [],
  makeOrderSuccess: null,
  isAddingProductToCart: {},
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

    case ActionTypes.SET_ADDING_PRODUCT_TO_CART:
      return {
        ...state,
        isAddingProductToCart: {
          [action.payload.productId]: true,
        },
      };

    case ActionTypes.CLEAR_ADDING_PRODUCT_TO_CART:
      return {
        ...state,
        isAddingProductToCart: {
          [action.payload.productId]: false,
        },
      };

    case ActionTypes.ADD_PRODUCT_TOCART_ERROR:
      return {
        ...state,
        addProductToCartError: {errorCode: action.payload.errorCode},
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
      requestMethod: 'get',
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
