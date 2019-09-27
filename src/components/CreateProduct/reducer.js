import { STORE_PRODUCT } from "./types";

const initState = {
  product: {
    name: "",
    description: "",
    category: "",
    subCategory: ""
  },
  status: undefined,
  error: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case STORE_PRODUCT:
      return { ...state, status: action.status, error: action.error };
    default:
      return state;
  }
}
