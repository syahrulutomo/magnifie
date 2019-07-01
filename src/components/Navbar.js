import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" data-test="navbar">
        <Link className="link" to="/"><h1 className="navbar__title" data-test="navbar__title">Magnifie</h1></Link>
        <div className="balance-wrapper">
          <p className="balance">saldo: { String(this.props.movies.balance).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }</p>
          <Link className="link" to="/user"><i className="fas fa-user-circle"></i></Link>
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