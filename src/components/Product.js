import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import grey from './../img/grey.jpg';


class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      genres: []
    }
    this.getPrice = this.getPrice.bind(this);
    this.formattedPrice = this.formattedPrice.bind(this);  
  }

  getPrice(rate){
    if(rate < 3)
      return 3500;
    else if(rate > 3 && rate <= 6)
      return 8250;
    else if(rate > 6 && rate <= 8)
      return 16350;
    else if(rate > 8 && rate <= 10)
      return 21250;
  }

  formattedPrice(number) {
    return String(number).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render(){   
    const img = this.props.movie['poster_path'] === null ? grey : 'https://image.tmdb.org/t/p/w300/'+this.props.movie['poster_path'];
    const id = this.props.movie.id;
    const slug = this.props.movie.title.replace(" ","-");
    const price = this.getPrice(this.props.movie['vote_average']);
    const rate = Math.floor(this.props.movie['vote_average'] / 2 );
    let rateArr = [];
    for(let i = 1; i <= rate; i++){
      rateArr.push(<i key={i} className="fas fa-star"></i>);
    }
    return(
      <div className="product">
        {
          (this.props.movies.collection.indexOf(this.props.movie.id) > -1) ? 
            (<div className="indicator">
                <p className="indicator-label">owned</p>
              </div>
            ) : ''
        }
        <Link to={`details/${id}-${slug}`}>
          <img className="product__img" src={img} alt={'image of '+this.props.movie['title']} />
        </Link>
        <p className="product__title">{this.props.movie['title']}</p>
        <div className="product__stars">{ (rateArr.length > 0) ? rateArr : 'No rate' }</div>
        <p className="product__price">{ price }</p>
      </div>
      
    );
  }
  
}

const mapStateToProps = (state) => {
  return{
    movies: state.movies
  }
}

export default connect(mapStateToProps)(Product);