import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  token: '',
  user: null,
  isSigningIn: false,
  signInSuccess: null,
  signInFailure: null,
  isConfirmingCode: false,
  confirmCodeSuccess: null,
  confirmCodeFailure: null,
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

    default:
      return state;
  }
}

export default authReducer;
