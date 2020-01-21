import React from 'react';
import PropTypes from 'prop-types';
import ItemizedDiscount from '../Discounts/itemizedDiscount';

class ProductForm extends React.Component {

  getUpdatedQuantity = () => {
    const disc= ItemizedDiscount.checkDiscount(parseInt(this.refs.quant.value));
    if (disc>0)
      return (this.refs.quant.value-disc);
    else
      return 0;
    }

  submit = (e) => {
    e.preventDefault();
    const updQuant = this.getUpdatedQuantity();
    let product = {
      name: this.refs.name.value,
      price: Number(this.refs.price.value),
      quantity: updQuant? Number(updQuant) : Number(this.refs.quant.value),
      fakeQuant: Number(this.refs.quant.value)
    };
    this.props.handleProduct(product);
    this.refs.name.value = "";
    this.refs.price.value = "";
    this.refs.quant.value = "";
  }

  render() {
    return (
      <form onSubmit={(e) => this.submit(e)}>
        <h3>Add new product</h3>
        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label vertical-middle">Name:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" ref="name" placeholder="Apple" required />
          </div>
        </div>

        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label vertical-middle">Price:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" ref="price" placeholder="Price per unit/Price per lb" step="0.01" required />
          </div>
        </div>

        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label vertical-middle">Quantity:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" ref="quant" step="0.01" placeholder="Quantity of product/Weight in lbs" required />
          </div>
        </div>

        <div className="row form-group">
          <div className="offset-2 col-10">
            <button className="btn btn-outline-primary">create product</button>
          </div>
        </div>
        <hr />
      </form>
    );
  }
}

export default ProductForm;

ProductForm.propTypes = {
  handleProduct: PropTypes.func
}