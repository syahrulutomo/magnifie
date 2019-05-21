import React from 'react';
import grey from './../img/grey.jpg';

const Product = (props) => {
  return(
    <div className="product">
      <img className="product__img" src={grey} alt={grey} />
      <p className="product__title">This is just title</p>
      <div className="product__stars"><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
      <p className="product__genre">Horror</p>
      <p className="product__price">Rp 12rb</p>
    </div>
  );
}

export default Product;