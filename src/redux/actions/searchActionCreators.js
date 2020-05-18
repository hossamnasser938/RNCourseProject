import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const setSearchProductsPage = nextPage => ({
  type: ActionTypes.SET_SEARCH_PRODUCTS_PAGE,
  payload: {nextPage},
});

export const appendSearchProducts = products => ({
  type: ActionTypes.APPEND_SEARCH_PRODUCTS,
  payload: {products},
});

export const searchForProduct = (query, fromScratch) => {
  return (dispatch, getState) => {
    const nextRequestPage = fromScratch ? 1 : getState().search.page;

    if (nextRequestPage) {
      axios
        .get('product/search', {params: {query, page: nextRequestPage}})
        .then(res => {
          const {lastPage, nextPage} = res.data;
          const page = nextPage > lastPage ? null : nextPage;
          dispatch(setSearchProductsPage(page));

          dispatch(appendSearchProducts(res.data.data));
        });
    }
  };
};
