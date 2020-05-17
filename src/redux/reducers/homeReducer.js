import {highOrderReducer} from 'api-request-biolerplate-actions';

const initialState = {
  home: {
    categories: [],
    products: [],
  },
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
  ],
  homeReducer,
);
