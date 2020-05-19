import * as ActionTypes from './ActionTypes';
import axios from 'axios';

const startFetchingCategoryProducts = categoryId => ({
  type: ActionTypes.START_FETCHING_CATEGORY_PRODUCTS,
  payload: {categoryId},
});

const stopFetchingCategoryProducts = categoryId => ({
  type: ActionTypes.STOP_FETCHING_CATEGORY_PRODUCTS,
  payload: {categoryId},
});

export const fetchHomeData = () => {
  return (dispatch, getState) => {
    dispatch(fetchHomeCategories());
    dispatch(fetchHomeProducts());
  };
};

export const fetchHomeCategories = () => {
  return (dispatch, getState) => {
    axios.get('/category/get-parents');
  };
};

export const fetchHomeProducts = () => {
  return (dispatch, getState) => {
    axios.get('/product/best-seller');
  };
};

export const fetchChildrenCategroies = categoryId => {
  return (dispatch, getState) => {
    axios.get('/category/get-children/' + categoryId);
  };
};

export const appendProducts = (categoryId, products) => ({
  type: ActionTypes.APPEND_PRODUCTS,
  payload: {categoryId, products},
});

export const setCategoryProductsPage = (categoryId, nextPage) => ({
  type: ActionTypes.SET_CATEGORY_PRODUCTS_PAGE,
  payload: {categoryId, nextPage},
});

export const fetchCategoryProducts = category => {
  return (dispatch, getState) => {
    const endPoint = category.parentId
      ? '/product/category/'
      : '/product/parent-category/';

    const calculatedPage = getState().home.categoryProductsNextPages[
      category._id
    ];

    const nextRequestPage = calculatedPage === undefined ? 1 : calculatedPage;

    if (nextRequestPage) {
      dispatch(startFetchingCategoryProducts(category._id));
      axios
        .get(endPoint, {params: {id: category._id, page: nextRequestPage}})
        .then(res => {
          dispatch(appendProducts(category._id, res.data.data));

          const {lastPage, nextPage} = res.data;
          const page = nextPage > lastPage ? null : nextPage;
          dispatch(setCategoryProductsPage(category._id, page));
        })
        .catch(err => {})
        .finally(() => {
          dispatch(stopFetchingCategoryProducts());
        });
    }
  };
};

export const fetchProduct = productId => {
  return (dispatch, getState) => {
    axios.get('/product-by-id/' + productId);
  };
};
