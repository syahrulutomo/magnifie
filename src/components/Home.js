import React from 'react';
import SearchBar from './SearchBar';
import SortBar from './SortBar';
// import ProductList from './ProductList';
import { connect } from 'react-redux';
import { fetchMovie } from './../actions/displayHome';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./ProductList'),
  loading: () => <div>Loading...   </div>
});

export class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0,
    }
  }

  componentDidMount(){
    this.props.onFetchMovie(this.state.page);
  }

  render(){
    const movies = this.props.movies;
    return(
      <div className="home" data-test="home">
        <SearchBar data-test="search"/>
        <SortBar data-test="sort"/>
        {/* <ProductList movies={movies} data-test="product-list"/> */}
        <LoadableComponent movies={movies} data-test="product-list" />
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

Home.propTypes = {
  movies: PropTypes.array.isRequired,
  onFetchMovie: PropTypes.func
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);