import { FETCH_PRODUCTS, UPDATE_PAGE } from "./types";

const initState = {
  products: [],
  meta: {
    page: 1,
    per_page: 1,
    total: 1
  }
};

export default function(state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.products, meta: action.meta };
    case UPDATE_PAGE:
      return { ...state, meta: { ...state.meta, page: action.page } };
    default:
      return state;
  }
}
