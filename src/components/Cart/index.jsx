import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchCartItems, updateItemQuantity } from "./actions";
import { saveQuantity } from "../ProductDetails/actions";
import { Link } from "react-router-dom";

class Cart extends PureComponent {
  componentDidMount() {
    this.props.fetchCartItems();
  }

  handleOnChange = (id, quantity) => {
    const { cartItems, saveQuantity, updateItemQuantity } = this.props;

    if (id) {
      updateItemQuantity(cartItems, id, parseInt(quantity));
      saveQuantity(id, { quantity: parseInt(quantity) });
    }
  };

  render() {
    const { cartItems } = this.props;

    return (
      <>
        <h1>Cart</h1>
        {cartItems.map(item => (
          <p key={item.id}>
            <select
              onChange={e => this.handleOnChange(item.id, e.target.value)}
              value={item.quantity}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
            {" x "}
            <Link to={`/products/${item.product.id}`}>{item.product.name}</Link>
          </p>
        ))}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { cartItems: state.cart.cartItems };
};

export default connect(
  mapStateToProps,
  { fetchCartItems, saveQuantity, updateItemQuantity }
)(Cart);
