import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  fetchProduct,
  removeFromCart,
  saveQuantity,
  updateQuantity
} from "./actions";
import DangerButton from "../StyledComponents/DangerButton";

class ProductDetails extends PureComponent {
  componentDidMount() {
    const {
      match: {
        params: { productId }
      },
      fetchProduct
    } = this.props;

    fetchProduct(productId);
  }

  handleOnChange = e => {
    const { cartItemId, saveQuantity, updateQuantity } = this.props;
    updateQuantity(e.target.value);
    if (cartItemId) {
      saveQuantity(cartItemId, { quantity: e.target.value });
    }
  };

  render() {
    const {
      addToCart,
      cartItemId,
      match: {
        params: { productId }
      },
      product,
      quantity,
      removeFromCart
    } = this.props;

    return (
      <>
        <h1>Product Details</h1>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.subCategory}</p>
        <br />
        <br />
        <label>Select quantity: </label>
        <select onChange={this.handleOnChange} value={quantity}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>{" "}
        {!cartItemId && (
          <button onClick={() => addToCart(productId, quantity)}>
            Add to cart
          </button>
        )}{" "}
        {cartItemId && (
          <DangerButton onClick={() => removeFromCart(cartItemId)}>
            Remove item
          </DangerButton>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  product: state.productDetails.product,
  quantity: state.productDetails.quantity,
  cartItemId: state.productDetails.cartItemId
});

export default connect(
  mapStateToProps,
  {
    addToCart,
    fetchProduct,
    removeFromCart,
    saveQuantity,
    updateQuantity
  }
)(ProductDetails);
