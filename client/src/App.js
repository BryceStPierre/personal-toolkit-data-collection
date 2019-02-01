import React, { Component } from 'react';

import {
  BrowserRouter as Router, Route, Redirect, Switch
} from 'react-router-dom';

import Navigation from './Navigation';
import Login from './Login';
import About from './About';
import Settings from './Settings';
import Collection from './Collection';
import NotFound from './NotFound';
import Footer from './Footer';
import Test from './Test';

import receive from './utils/receive';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isSignedIn: false,
      isOpen: false,
      user: null
    };
  }

  componentWillMount () {
    this.getSignIn();
  }

  getSignIn = () => {
    receive('/api/authenticate', user => {
      this.handleSignIn(user);
    });
  }

  handleSignIn = (user) => {
    this.setState({
      user: user,
      isSignedIn: user ? true : false
    });
  };

  handleToggleNavigation = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <div>
          <Navigation 
            isOpen={this.state.isOpen}
            isSignedIn={this.state.isSignedIn}
            onToggle={this.handleToggleNavigation} />
          <Switch>
            <Route path='/' exact render={props => <Login {...props} onSignIn={this.handleSignIn} />} />
            <Route path='/about' component={About} />
            <Route path='/settings' component={Settings} />
            {/* <Route path='/test' component={Test} /> */}
            { this.state.isSignedIn 
              ? <Route path='/collection' component={Collection} /> 
              : <Redirect to={{ pathname: '/', state: { from: this.props.location } }} /> }
            <Route component={NotFound} />
          </Switch>
          <Footer user={this.state.user}/>
        </div>
      </Router>
    );
  }
}

export default App;
