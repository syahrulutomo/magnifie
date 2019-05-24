import React, { Component } from 'react';
import { connect } from 'react-redux';
import grey from './../img/grey.jpg';
import { fetchDetails, buy } from '../actions/displayDetails';
import { Link } from 'react-router-dom';

class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
    }
    this.getPrice = this.getPrice.bind(this);
    this.formattedPrice = this.formattedPrice.bind(this);    
  }

  componentWillMount(){
    const {id} = this.props.match.params;
    this.setState({
      id: id
    })
  }

  componentDidMount(){
    this.props.onFetchDetails(this.state.id);
  }

  componentWillUnmount(){
    document.removeEventListener('click', this.getPrice);
    document.removeEventListener('click', this.formattedPrice);
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

  render() {
    const img = this.props.details['poster_path'] === null ? grey : 'https://image.tmdb.org/t/p/w300/'+this.props.details['poster_path'];
    const price = this.getPrice(this.props.details['vote_average']);
    return (
      <div className="details">
        <h1 className="details__title"> {this.props.details.title} </h1>
        <p className="details__tagline">{this.props.details.tagline}</p>
        <img className="details__img" 
              src= {img}
              alt={'image of '+this.props.details.title} />
        <p className="details__overview">{this.props.details.overview}</p>
        <p className="details__rate">Rate: {this.props.details['vote_average']}</p>
        <p className="details__duration">Duration: {this.props.details['runtime']} minutes</p>
        <p className="details__price">Price : Rp { this.formattedPrice(price) }</p>
        { this.props.movies.collection.filter(item => item.id).indexOf(this.state.id) > -1 ? <p className="details__own-yes">You already have this movie</p> : <p className="details__own-no">You don't have this movie</p> }
        <Link to="/">{ this.props.movies.collection.filter(item => item.id).indexOf(this.state.id) > -1 ? <button className="details__buy-disabled" disabled>Buy</button> : <button className="details__buy" onClick={() => this.props.onBuy(this.state.id,price)}>Buy</button>}</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.details.details,
    movies: state.movies,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchDetails: (id) => {
      dispatch(fetchDetails(id))
    },
    onBuy: (id,price) => {
      dispatch(buy(id,price))
    },
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Details);