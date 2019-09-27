import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchProducts, updatePage } from "./actions";
import { Link } from "react-router-dom";

class Product extends PureComponent {
  componentDidMount() {
    this.props.fetchProducts();
  }

  changePage = change => {
    this.props.updatePage(change);
    this.props.fetchProducts();
  };

  render() {
    const {
      meta: { page, per_page, total },
      products
    } = this.props;

    return (
      <>
        <h1>Product List</h1>
        {products.map(product => (
          <Link to={`products/${product.id}`} key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </Link>
        ))}

        <h5>Page: {page}</h5>
        {page > 1 && <button onClick={() => this.changePage(-1)}>Prev</button>}
        {per_page * page < total && (
          <button onClick={() => this.changePage(+1)}>Next</button>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  meta: state.products.meta
});

export default connect(
  mapStateToProps,
  { fetchProducts, updatePage }
)(Product);
