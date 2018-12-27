import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Navigation from './Navigation';
import Login from './Login';
import About from './About';
import Collection from './Collection';
import Footer from './Footer';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isOpen: false,
      isLoggedIn: false
    };
  }

  toggleNavigation = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation onToggle={this.toggleNavigation} isOpen={this.state.isOpen} />

          <Route path="/" exact component={Login} />
          <Route path="/about" component={About} />
          <Route path="/collection" component={Collection} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
