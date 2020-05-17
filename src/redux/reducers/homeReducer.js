import {highOrderReducer} from 'api-request-biolerplate-actions';

const initialState = {
  home: {
    categories: [],
    products: [],
  },
  childrenCategories: {},
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
          [action.payload.data.children[0].parentId]:
            action.payload.data.children,
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
  ],
  homeReducer,
);
