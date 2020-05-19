import * as ActionTypes from '../actions/ActionTypes';
import {highOrderReducer} from 'api-request-biolerplate-actions';

const initialState = {
  home: {
    categories: [],
    products: [],
  },
  childrenCategories: {},
  categoryProducts: {},
  categoryProductsNextPages: {},
  product: null,
  isFetchingCategoryProducts: {},
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS_' + 'getHomeCategories':
      return {
        ...state,
        home: {
          ...state.home,
          categories: action.payload.data.cats,
        },
      };
    case 'SUCCESS_' + 'fetchHomeProducts':
      return {
        ...state,
        home: {
          ...state.home,
          products: action.payload.data.products,
        },
      };

    case 'SUCCESS_' + 'fetchChildrenCategories':
      return {
        ...state,
        childrenCategories: {
          ...state.childrenCategories,
          [action.payload.data.children[0].parentId]:
            action.payload.data.children,
        },
      };

    case ActionTypes.APPEND_PRODUCTS:
      const catId = action.payload.categoryId;

      return {
        ...state,
        categoryProducts: {
          ...state.categoryProducts,
          [catId]: (state.categoryProducts[catId] || []).concat(
            action.payload.products,
          ),
        },
      };

    case ActionTypes.SET_CATEGORY_PRODUCTS_PAGE:
      return {
        ...state,
        categoryProductsNextPages: {
          ...state.categoryProductsNextPages,
          [action.payload.categoryId]: action.payload.nextPage,
        },
      };

    case 'SUCCESS_' + 'fetchProduct':
      return {
        ...state,
        product: action.payload.data.product,
      };

    case ActionTypes.START_FETCHING_CATEGORY_PRODUCTS:
      return {
        ...state,
        isFetchingCategoryProducts: {
          ...state.isFetchingCategoryProducts,
          [action.payload.categoryId]: true,
        },
      };

    case ActionTypes.STOP_FETCHING_CATEGORY_PRODUCTS:
      return {
        ...state,
        isFetchingCategoryProducts: {
          ...state.isFetchingCategoryProducts,
          [action.payload.categoryId]: false,
        },
      };

    default:
      return state;
  }
}

export default highOrderReducer(
  initialState,
  [
    {
      requestEndPoint: 'category/get-parents',
      baseActionType: 'getHomeCategories',
    },
    {
      requestEndPoint: 'product/best-seller',
      baseActionType: 'fetchHomeProducts',
    },
    {
      requestEndPoint: /^category\/get-children\/[a-zA_Z0-9]+/,
      baseActionType: 'fetchChildrenCategories',
    },
    {
      requestEndPoint: /^product-by-id\/[a-zA_Z0-9]+/,
      baseActionType: 'fetchProduct',
    },
  ],
  homeReducer,
);
