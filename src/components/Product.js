import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import grey from './../img/grey.jpg';
import {API_KEY} from './../APIkey';
import axios from 'axios';

class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      genres: []
    }
  }

  signal = axios.CancelToken.source();

  componentDidMount(){
    const that = this;
    const genreIds = [...this.props.movie['genre_ids']];

    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+API_KEY+'&language=en-US',{ cancelToken: this.signal.token, })
    .then(res => res.json())
    .then(data => { 
      that.setState(() => ({ genres: [...data['genres']].filter(current => genreIds.indexOf(current.id) > -1 ) }));
    })
    .catch(err => console.log(err.message));
  }

  componentWillMount(){
    this.signal.cancel('Api is being canceled');
  }
  
  render(){   
    const genre = this.state.genres.length === 0 ? 'waiting...' : this.state.genres[0]['name'];
    const img = this.props.movie['poster_path'] === null ? grey : 'https://image.tmdb.org/t/p/w300/'+this.props.movie['poster_path'];
    const id = this.props.movie.id;
    const slug = this.props.movie.title.replace(" ","-");
    return(
      <div className="product">
        <Link to={`details/${id}-${slug}`}>
          <img className="product__img" src={img} alt={'image of '+this.props.movie['title']} />
        </Link>
        <p className="product__title">{this.props.movie['title']}</p>
        <div className="product__stars"><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
        <p className="product__genre">{genre}</p>
        <p className="product__price">Rp 12rb</p>
      </div>
      
    );
  }
  
}

export default Product;