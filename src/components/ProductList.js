import React from 'react'
import Product from './Product';

class ProductList extends React.Component {
  render() {
    let list = this.props.movies.map((current,index) => <Product movie={current} key={current['id']}/>);
    return (
      <div className="productList">
        { list }
      </div>
    )
  }
}

export default ProductList;