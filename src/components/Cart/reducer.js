import { FETCH_CART_ITEMS, UPDATE_ITEM_QUANTITY } from "./types";

const initState = {
  cartItems: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case FETCH_CART_ITEMS:
      return { ...state, cartItems: action.cartItems };
    case UPDATE_ITEM_QUANTITY:
      return { ...state, cartItems: action.cartItems };
    default:
      return state;
  }
}
