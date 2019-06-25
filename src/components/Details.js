import React, { Component } from 'react';
import { connect } from 'react-redux';
import grey from './../img/grey.jpg';
import PropTypes from 'prop-types';
import { fetchDetails, buy } from '../actions/displayDetails';

export class Details extends Component {
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
    this.setState({
      id: ''
    })
  }

  getPrice = (rate) => {
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
    const genres = this.props.details['genres'] === undefined ? '' : this.props.details['genres'][0]['name'];
    const img = this.props.details['poster_path'] === null ? grey : 'https://image.tmdb.org/t/p/w300/'+this.props.details['poster_path'];
    const price = this.getPrice(this.props.details['vote_average']);
    return (
      <div className="details" data-test="details" key={this.props.details.id}>
        <h1 className="details__title" data-test="details__title"> {this.props.details.title} </h1>
        <p className="details__tagline" data-test="details__tagline">{this.props.details.tagline}</p>
        <img className="details__img" 
              src= {img}
              alt={'image of '+this.props.details.title} 
              data-test="details__img"  
            />
        <p className="details__overview" data-test="details__overview">{this.props.details.overview}</p>
        <p className="details__rate" data-test="details__rate">Rate: {this.props.details['vote_average']}</p>
        <p className="details__duration" data-test="details__duration">Genre: { genres }</p>
        <p className="details__runtime" data-test="details__runtime">Duration: {this.props.details['runtime']} minutes</p>
        <p className="details__price" data-test="details__price">Price : Rp { this.formattedPrice(price) }</p>
        { (this.props.movies.collection.indexOf(this.props.details.id) > -1) ? <p className="details__own-yes" data-test="details__own-yes">You already have this movie</p> : <p className="details__own-no" data-test="details__own-no">You don't have this movie</p> }
       { (this.props.movies.collection.indexOf(this.props.details.id) > -1) ? <button className="details__buy-disabled" data-test="details__buy-disabled" disabled>Buy</button> : <button className="details__buy" data-test="details__buy" onClick={() => this.props.onBuy(this.props.details.id ,price)}>Buy</button>}
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

Details.propTypes = {
  id: PropTypes.number,
  details: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired,
  onFetchDetails: PropTypes.func.isRequired,
  onBuy: PropTypes.func.isRequired
} 

export default connect(mapStateToProps, mapDispatchToProps)(Details);