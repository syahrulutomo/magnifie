import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link className="link" to="/"><h1 className="navbar__title">Magnifie</h1></Link>
        <div className="balance-wrapper">
          <p className="balance">saldo: {this.props.movies.balance}</p>
        <i className="fas fa-user-circle"></i>
        </div>       
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  }
}

export default connect(mapStateToProps)(Navbar); 