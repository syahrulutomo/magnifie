import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import User from './components/User';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />   
            <Route path="/details/:id-:slug" component={Details} />
            <Route path="/user" component={User} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
