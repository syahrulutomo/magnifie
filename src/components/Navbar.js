import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link className="link" to="/"><h1 className="navbar__title">Magnifie</h1></Link>
        <i className="fas fa-user-circle"></i>
      </nav>
    )
  }
}

export default Navbar; 