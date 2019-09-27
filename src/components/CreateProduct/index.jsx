import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { storeProduct } from "./actions";
import H4 from "../StyledComponents/H4";

class CreateProduct extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        name: "",
        description: "",
        category: "",
        sub_category: ""
      }
    };
  }

  handleOnChange = e => {
    const attr = e.target.getAttribute("data-attr");

    this.setState({
      product: { ...this.state.product, [attr]: e.target.value }
    });
  };

  handleOnSubmit = async e => {
    e.preventDefault();
    const { status } = await this.props.storeProduct(this.state.product);

    if (status === "SUCCESS") {
      this.setState({
        product: {
          name: "",
          description: "",
          category: "",
          sub_category: ""
        }
      });
    }
  };

  render() {
    const {
      product: { name, description, category, sub_category }
    } = this.state;
    const { error, status } = this.props;

    return (
      <>
        {status && (
          <H4 variant={status}>
            {status === "SUCCESS" ? "Saved Successfully" : error}
          </H4>
        )}{" "}
        <form onSubmit={this.handleOnSubmit}>
          <h1>Create Product</h1>
          <label>Name</label>
          <input
            type="text"
            data-attr="name"
            onChange={this.handleOnChange}
            value={name}
          />
          <br />
          <br />
          <br />
          <label>Description</label>
          <textarea
            type="text"
            data-attr="description"
            onChange={this.handleOnChange}
            value={description}
          ></textarea>
          <br />
          <br />
          <br />
          <label>Category</label>
          <input
            type="text"
            data-attr="category"
            onChange={this.handleOnChange}
            value={category}
          />
          <br />
          <br />
          <br />
          <label>Sub-Category</label>
          <input
            type="text"
            data-attr="sub_category"
            onChange={this.handleOnChange}
            value={sub_category}
          />
          <br />
          <br />
          <br />
          <button type="submit">Save</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  status: state.product.status,
  error: state.product.error
});

export default connect(
  mapStateToProps,
  { storeProduct }
)(CreateProduct);
