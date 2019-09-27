import React from "react";
import "./App.css";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import Products from "./components/Products";
import CreateProduct from "./components/CreateProduct";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <>
        <Link style={{ marginRight: "20px" }} to="/home">
          Home
        </Link>
        <Link style={{ marginRight: "20px" }} to="/create_product">
          Create Product
        </Link>
        <Link style={{ marginRight: "20px" }} to="/cart">
          Cart
        </Link>
        <Switch>
          <Route path="/" component={Products} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/create_product" component={CreateProduct} exact />
          <Route path="/products/:productId" component={ProductDetails} exact />
          <Redirect to="/" />
        </Switch>
      </>
    </Provider>
  );
}

export default App;
