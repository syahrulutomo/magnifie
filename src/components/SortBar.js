import React from 'react';
import { connect } from 'react-redux';
import { sortByTitle, sortByRate, sortByPrice } from './../actions/sort';

class Sort extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      value: 'price',
    }
    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(event){
    this.setState({
      value: event.target.value,
    });

    if(event.target.value === 'title'){
      this.props.onSortByTitle();
    } else if(event.target.value === 'rate'){
      this.props.onSortByRate();
    } else if(event.target.value === 'price'){
      this.props.onSortByPrice();
    }
  }

  render() {
    return(
        <select className="sort-bar " onChange={this.handleChange} value={this.state.value}>
          <option value="price">Sort By Price</option>
          <option value="title">Sort By Title</option>
          <option value="rate">Sort By Rate</option>
        </select>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSortByTitle: () => {
      dispatch(sortByTitle())
    },
    onSortByRate: () => {
      dispatch(sortByRate())
    },
    onSortByPrice: () => {
      dispatch(sortByPrice())
    },
  }
}

export default connect(null,mapDispatchToProps)(Sort);