import * as ActionTypes from './ActionTypes';
import axios from 'axios';

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
      axios
        .get(endPoint, {params: {id: category._id, page: nextRequestPage}})
        .then(res => {
          dispatch(appendProducts(category._id, res.data.data));

          const {lastPage, nextPage} = res.data;
          const page = nextPage > lastPage ? null : nextPage;
          r.log('page', page);
          dispatch(setCategoryProductsPage(category._id, page));
        })
        .catch(err => {});
    }
  };
};

export const fetchProduct = productId => {
  return (dispatch, getState) => {
    axios.get('/product-by-id/' + productId);
  };
};
