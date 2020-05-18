import * as ActionTypes from '../actions/ActionTypes';
import {highOrderReducer} from 'api-request-biolerplate-actions';

const initialState = {
  token: '',
  user: null,
  selectedAddressId: null,
  orders: [],
  isSigningIn: false,
  signInSuccess: null,
  signInFailure: null,
  isConfirmingCode: false,
  confirmCodeSuccess: null,
  confirmCodeFailure: null,
  updateNameSuccess: null,
  addAddressSuccess: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case ActionTypes.SIGNIN_START:
      return {
        ...state,
        isSigningIn: true,
      };

    case ActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        isSigningIn: false,
        signInSuccess: {},
      };

    case ActionTypes.SIGNIN_FAILURE:
      return {
        ...state,
        isSigningIn: false,
        signInFailure: {errorCode: action.payload.errorCode},
      };

    case ActionTypes.CONFIRM_CODE_START:
      return {
        ...state,
        isConfirmingCode: true,
      };

    case ActionTypes.CONFIRM_CODE_SUCCESS:
      return {
        ...state,
        isConfirmingCode: false,
        confirmCodeSuccess: {},
      };

    case ActionTypes.CONFIRM_CODE_FAILURE:
      return {
        ...state,
        isConfirmingCode: false,
        confirmCodeFailure: {errorCode: action.payload.errorCode},
      };

    case 'SUCCESS_' + 'changeName':
      return {
        ...state,
        updateNameSuccess: {},
      };

    case 'SUCCESS_' + 'addAddress':
      return {
        ...state,
        addAddressSuccess: {},
      };

    case ActionTypes.ADDRESS_SELECTED:
      return {
        ...state,
        selectedAddressId: action.payload.addressId,
      };

    case 'SUCCESS_' + 'getOrders':
      return {
        ...state,
        orders: action.payload.data.orders,
      };

    default:
      return state;
  }
}

export default highOrderReducer(
  initialState,
  [
    {
      requestEndPoint: 'user/get-data',
      baseActionType: 'userData',
    },
    {
      requestEndPoint: 'user/change-name',
      baseActionType: 'changeName',
    },
    {
      requestEndPoint: 'address',
      baseActionType: 'addAddress',
    },
    {
      requestEndPoint: 'order',
      requestMethod: 'get',
      baseActionType: 'getOrders',
    },
  ],
  authReducer,
);
