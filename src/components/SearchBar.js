import React from 'react';

class SearchBar extends React.Component {
  render(){
    return(
      <div className="search">
        <input type="text" className="search__input" placeholder="looking for something?" />
        <button className="search__btn"><i className="fas fa-search"></i></button>
      </div>
    );
  }
}

export default SearchBar;