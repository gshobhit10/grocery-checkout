import React from 'react';
import Product from './product';
import ProductForm from '../Catalog/productForm';
import Total from './total';
const productList = [];

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      productList: ""
    };

    this.createProduct = this.createProduct.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    }

  componentDidMount() {
      this.setState({ productList: productList });
    }
  

  createProduct = (product) => {
    this.setState({
      products: this.state.productList.push(product)
    });
  }

  calculateTotal = (price) => {
    this.setState({
      total: this.state.total + price
    });
  }

  render() {
    if (!this.state.productList) return <p>loading...!!!!</p>;

    let component = this;
    let products = this.state.productList.map(function(product) {
      return (
        <Product
          key={product.name}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          fakeQuant={product.fakeQuant}
          handleShow={component.showProduct}
          handleTotal={component.calculateTotal}
        />
      );
    });

    return (
        <section className="container-form">
          <div className="row">
            <div className="col-sm-8">
              <ProductForm handleProduct={this.createProduct} />
            </div>
            <div className="col-sm-4">
              {products}
              <Total total={this.state.total} />
            </div>
          </div>
        </section>
    );
  }
}

  export default ProductList;