import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: props.quantity
    };
    this.props.handleTotal(props.price*props.quantity);
  }

  render() {

    return (
      <div>
        <div className="row form-group">
          <div className="col-sm-8">
            <h4>{this.props.name}</h4>
          </div>
          {this.props.fakeQuant === this.props.quantity ?
            <div className="col-sm-4 text-right">${(this.props.price*this.props.quantity).toFixed(2)}</div>:
            <React.Fragment>
              <del className="col-sm-4 text-right">${(this.props.price*this.props.fakeQuant).toFixed(2)}</del>
              <div className="col-sm-12 text-right">${(this.props.price*this.props.quantity).toFixed(2)}</div>
            </React.Fragment>
          }
        </div>
        <div className="row btn-toolbar">
          <div className="col-6">
          qty: {this.props.fakeQuant}
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Product;

Product.propTypes = {
    name : PropTypes.string,
    price : PropTypes.number,
    quantity : PropTypes.number,
    fakeQuant: PropTypes.number,
    handleShow : PropTypes.func,
    handleTotal : PropTypes.func
  }