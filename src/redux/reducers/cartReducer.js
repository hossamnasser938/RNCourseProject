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

    case ActionTypes.UPDATE_CART_ITEM_IMMEDIATELY:
      if (action.payload.action === 'delete') {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            item => item._id !== action.payload.cartItemId,
          ),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map(item => {
            if (item._id === action.payload.cartItemId) {
              return {
                ...item,
                count:
                  action.payload.action === 'increase'
                    ? item.count + 1
                    : item.count - 1,
              };
            }

            return item;
          }),
        };
      }

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
