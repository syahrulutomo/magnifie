import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import grey from './../img/grey.jpg';

export class Product extends Component {
  constructor(props){
    super(props);
    this.formattedPrice = this.formattedPrice.bind(this);  
  }

  formattedPrice(number) {
    return String(number).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render(){   
    const img = this.props.movie['poster_path'] === null ? grey : 'https://image.tmdb.org/t/p/w500/'+this.props.movie['poster_path'];
    const id = this.props.movie.id;
    const slug = this.props.movie.title.replace(" ","-");
    const price = this.props.movie['price'];
    const rate = Math.floor(this.props.movie['vote_average'] / 2 );
    let rateArr = [];
    for(let i = 1; i <= rate; i++){
      rateArr.push(<i key={i} className="fas fa-star"></i>);
    }
    return(
      <div className="product">
        {
          (this.props.movies.collection.indexOf(this.props.movie.id) > -1) ? 
            (<div className="indicator" data-test="indicator">
                <p className="indicator-label">owned</p>
              </div>
            ) : ''
        }
        <Link to={`details/${id}-${slug}`}>
          <img className="product__img" src={img} alt={'image of '+this.props.movie['title']} data-test="product__img"/>
        </Link>
        <p className="product__title" data-test="product__title">{this.props.movie['title']}</p>
        <div className="product__stars" data-test="product__stars">{ (rateArr.length > 0) ? rateArr : 'No rate' }</div>
        <p className="product__price" data-test="product__price">Rp. { this.formattedPrice(price) }</p>
      </div>
      
    );
  }
}

Product.propTypes = {
  movie: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return{
    movies: state.movies
  }
}

export default connect(mapStateToProps, null)(Product);