import { FETCH_CART_ITEMS, UPDATE_ITEM_QUANTITY } from "./types";
import cloneDeep from "lodash/cloneDeep";

export const fetchCartItems = () => dispatch => {
  const { REACT_APP_BACKEND_URL: backendUrl } = process.env;

  fetch(`${backendUrl}/cart_items`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then(result => {
      dispatch({ type: FETCH_CART_ITEMS, cartItems: result.data });
    })
    .catch(error => dispatch({ type: FETCH_CART_ITEMS, cartItems: [] }));
};

export const updateItemQuantity = (cartItems, id, quantity) => dispatch => {
  const index = cartItems.findIndex(item => item.id === id);

  if (index > -1) {
    cartItems[index].quantity = quantity;
  }

  dispatch({
    type: UPDATE_ITEM_QUANTITY,
    cartItems: cloneDeep(cartItems)
  });
};
