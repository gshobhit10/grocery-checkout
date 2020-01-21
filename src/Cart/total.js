import React from 'react';
import PropTypes from 'prop-types';
import AmountDiscount from '../Discounts/amountDiscount';

class Total extends React.Component {

  getDiscounts = () => {
    const total = this.props.total.toFixed(2);
    const disc= AmountDiscount.checkDiscount(total);
    const price = {
      "total": total,"disc": disc
    }
    return price;
    
  }

  render() {
    let total = this.getDiscounts();
    const boolDisc = AmountDiscount.get();
    
    return (
      <div style={{"marginTop": "30px", "backgroundColor":"#F6F6F6","padding": "10px"}}>
        <h5 className="row" style={{ fontWeight: 200 }}>
          <span className="col-6">total price:</span>
          {
            boolDisc?
            <React.Fragment>
              <del className="col-6 text-right">${total.total}</del>
              <span className="col-12 text-right">${total.total-total.disc}</span>
            </React.Fragment>:
            <span className="col-6 text-right">${total.total}</span>
          }
        </h5>
      </div>
    );
  }
}

export default Total;

Total.propTypes = {
  total: PropTypes.number
}
