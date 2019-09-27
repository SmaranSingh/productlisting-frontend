import {
  ADD_TO_CART,
  FETCH_PRODUCT,
  REMOVE_FROM_CART,
  SAVE_QUANTITY,
  UPDATE_QUANTITY
} from "./types";

export const addToCart = (id, quantity) => dispatch => {
  const { REACT_APP_BACKEND_URL: backendUrl } = process.env;

  fetch(`${backendUrl}/cart_items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ product_id: id, quantity })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then(result => {
      dispatch({
        type: ADD_TO_CART,
        status: result.status,
        error: result.message,
        cartItemId: result.data.id,
        quantity: result.data.quantity
      });
    })
    .catch(error => dispatch({ type: ADD_TO_CART, status: "ERROR", error }));
};

export const fetchProduct = id => dispatch => {
  const { REACT_APP_BACKEND_URL: backendUrl } = process.env;

  fetch(`${backendUrl}/products/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then(result => {
      const product = {
        name: result.data.name,
        description: result.data.description,
        category: result.data.category,
        subCategory: result.data.sub_category
      };
      let quantity;
      let cartItemId;

      if (result.data.cart_item) {
        quantity = result.data.cart_item.quantity;
        cartItemId = result.data.cart_item.id;
      }

      dispatch({ type: FETCH_PRODUCT, product, quantity, cartItemId });
    })
    .catch(error => dispatch({ type: FETCH_PRODUCT, product: {} }));
};

export const removeFromCart = id => dispatch => {
  const { REACT_APP_BACKEND_URL: backendUrl } = process.env;

  fetch(`${backendUrl}/cart_items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then(result =>
      dispatch({
        type: REMOVE_FROM_CART,
        status: result.status,
        error: result.message,
        cartItemId: null,
        quantity: 1
      })
    )
    .catch(error =>
      dispatch({ type: REMOVE_FROM_CART, status: "ERROR", error })
    );
};

export const saveQuantity = (id, params) => dispatch => {
  const { REACT_APP_BACKEND_URL: backendUrl } = process.env;

  fetch(`${backendUrl}/cart_items/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then(result =>
      dispatch({
        type: SAVE_QUANTITY,
        quantity: result.data.quantity
      })
    )
    .catch(error =>
      dispatch({ type: REMOVE_FROM_CART, status: "ERROR", error })
    );
};

export const updateQuantity = value => dispatch => {
  dispatch({
    type: UPDATE_QUANTITY,
    quantity: value
  });
};
