import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {API_KEY} from './../APIkey';
import { removeMovie } from '../actions/user';
import Movie from './UserMovie'; 

export class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataList : []
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount(){
       const responses = this.getData(this.props.collection);
       responses.then( data => {
           this.setState({
               dataList: data
           })
        })    
    }

    handleClick(id){
        this.props.onRemoveMovie(id);
    }

    getData = async (list) => {
        const pArray = list.map(async item => {
            const response = await fetch('https://api.themoviedb.org/3/movie/'+item+'?api_key='+API_KEY+'&language=en-US');
            const data = await response.json();
            return data;
        });
        const dataList = await Promise.all(pArray);
        return dataList;
    }

    render() {
       let list = this.state.dataList.slice(0);
       list = list.length > 0 ? list.map( item => <Movie key={item.id} 
                                                         id={item.id} 
                                                         title={item['title']} 
                                                         poster={item['poster_path']} 
                                                         />) : '';
        
        return (
            <div className="user">
                { 
                    list    
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        collection: state.movies.collection
    }
}

export default connect(mapStateToProps, null)(User);