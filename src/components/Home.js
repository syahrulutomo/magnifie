import React from 'react';
import SearchBar from './SearchBar';
import Sort from './Sort';
import ProductList from './ProductList';
import { connect } from 'react-redux';
import { fetchMovie } from './../actions/displayHome';


class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onFetchMovie();
  }

  render(){
    const movies = this.props.movies;
    return(
      <div className="home">
        <SearchBar/>
        <Sort />
        <ProductList movies={movies}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovie : () => {
      dispatch(fetchMovie())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);