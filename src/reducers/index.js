import { combineReducers } from "redux";

import CartReducer from "../components/Cart/reducer";
import CreateProductReducer from "../components/CreateProduct/reducer";
import ProductReducer from "../components/Products/reducer";
import ProductDetailsReducer from "../components/ProductDetails/reducer";

export default combineReducers({
  cart: CartReducer,
  product: CreateProductReducer,
  productDetails: ProductDetailsReducer,
  products: ProductReducer
});
