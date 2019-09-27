import { FETCH_PRODUCTS, UPDATE_PAGE } from "./types";

export const fetchProducts = () => (dispatch, getState) => {
  const { REACT_APP_BACKEND_URL: backendUrl } = process.env;
  const {
    products: {
      meta: { page, per_page }
    }
  } = getState();

  fetch(`${backendUrl}/products?page=${page}&per_page=${per_page}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then(result => {
      dispatch({
        type: FETCH_PRODUCTS,
        products: result.data,
        meta: result.meta
      });
    })
    .catch(error =>
      dispatch({
        type: FETCH_PRODUCTS,
        products: [],
        meta: { page: 1, per_page: 2, total: 2 }
      })
    );
};

export const updatePage = change => (dispatch, getState) => {
  let page = getState().products.meta.page + change;
  page = page < 1 ? 1 : page;

  dispatch({ type: UPDATE_PAGE, page });
};
