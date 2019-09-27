import {
  ADD_TO_CART,
  FETCH_PRODUCT,
  REMOVE_FROM_CART,
  SAVE_QUANTITY,
  UPDATE_QUANTITY
} from "./types";

const initState = {
  product: {},
  quantity: 0,
  cartItemId: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        status: action.status,
        error: action.error,
        quantity: action.quantity,
        cartItemId: action.cartItemId
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        product: action.product,
        quantity: action.quantity,
        cartItemId: action.cartItemId
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        status: action.status,
        error: action.error,
        quantity: action.quantity,
        cartItemId: action.cartItemId
      };
    case SAVE_QUANTITY:
      return { ...state, quantity: action.quantity };
    case UPDATE_QUANTITY:
      return { ...state, quantity: action.quantity };
    default:
      return state;
  }
}
