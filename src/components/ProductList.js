import React from 'react'
import Product from './Product';
import PropTypes from 'prop-types';

export class ProductList extends React.Component {
  render() {
    let list = this.props.movies.map((current,index) => <Product movie={current} key={current['id']} data-test="product"/>);
    return (
      <div className="productList" data-test="product-list">
        {list}
      </div>
    )
  }
}

ProductList.propTypes = {
  movies: PropTypes.array.isRequired
}

export default ProductList;