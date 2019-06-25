import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from './../actions/search';

export class SearchBar extends React.Component {
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
      <div className="search" data-test="search">
        <input  type="text" 
                className="search__input" 
                placeholder="looking for something?" 
                onChange={this.handleChange}
                value={this.state.text}
                data-test="search__input"
        />
        <button className="search__btn" onClick={this.handleClick} data-test="button-search"><i className="fas fa-search"></i></button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSearch : (text) => {
      dispatch(fetchSearch(text))
    }
  }
}
export default connect(null, mapDispatchToProps)(SearchBar);