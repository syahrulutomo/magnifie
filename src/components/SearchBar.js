import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from './../actions/search';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
    this.setState({
      text: event.target.value,
    })
  }

  handleClick(){
    this.props.onFetchSearch(this.state.text);
  }

  render(){
    return(
      <div className="search">
        <input  type="text" 
                className="search__input" 
                placeholder="looking for something?" 
                onChange={this.handleChange}
                value={this.state.text}
        />
        <button className="search__btn" onClick={this.handleClick}><i className="fas fa-search"></i></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSearch : (text) => {
      dispatch(fetchSearch(text))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);