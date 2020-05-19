import * as ActionTypes from '../actions/ActionTypes';
import {highOrderReducer} from 'api-request-biolerplate-actions';

const initialState = {
  products: [],
  page: 1,
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.APPEND_SEARCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };

    case ActionTypes.SET_SEARCH_PRODUCTS_PAGE:
      return {
        ...state,
        page: action.payload.nextPage,
      };

    default:
      return state;
  }
}

export default highOrderReducer(
  initialState,
  [{requestEndPoint: 'product/search', baseActionType: 'fetchSearchProducts'}],
  searchReducer,
);
