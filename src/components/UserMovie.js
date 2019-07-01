import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import grey from './../img/grey.jpg';
import { removeMovie } from '../actions/user';
import { Link } from "react-router-dom";

export class Movie extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const src ="https://image.tmdb.org/t/p/w300/"+ this.props.poster;
        const img = this.props.poster === null ? grey : this.props.poster;
        const srcset = `https://image.tmdb.org/t/p/w185/${img} 320w, https://image.tmdb.org/t/p/w500/${img} 500w, https://image.tmdb.org/t/p/original/${img} 1000w`;
        const id = this.props.id;
        return (
            <div className="user__movie">          
                <img className="user__movie__img" 
                     srcSet={srcset}
                     src={src}  
                     alt={'image of '+ this.props.title} 
                     data-test="user__movie__img"/>
                <p className="user__movie__title" data-test="user__movie__title">{ this.props.title}</p>
                <Link className="link" to="/">
                    <button className="user__movie__remove-btn" onClick={this.props.onRemoveMovie({id})}>Remove</button>
                </Link>
            </div>
        )
    }     
}

const mapDispatchToPropsMovie = (dispatch) => {
    return {
        onRemoveMovie: (id) => {
            dispatch(removeMovie(id))
        }
    }
}

export default connect(null, mapDispatchToPropsMovie)(Movie);