import React from 'react';
import SearchBar from './SearchBar';
import Sort from './Sort';
import ProductList from './ProductList';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="home">
        <SearchBar />
        <Sort />
        <ProductList />
      </div>
    )
  }
}

export default Home;