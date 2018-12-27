import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Login from './Login';
import About from './About';
import Collection from './Collection';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isOpen: false,
      isLoggedIn: false
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation onToggle={this.toggle} isOpen={this.state.isOpen} />

          <Route path="/" exact component={Login} />
          <Route path="/about" component={About} />
          <Route path="/collection" component={Collection} />
        </div>
      </Router>
    );
  }
}

export default App;
