import React, { Component } from 'react';

import {
  BrowserRouter as Router, Route, Redirect, Switch
} from 'react-router-dom';

import Navigation from './components/Navigation';
import Login from './Login';
import Logout from './Logout';
import About from './About';
import Settings from './Settings';
import Collection from './Collection';
import NotFound from './NotFound';
import Footer from './components/Footer';

import receive from './utils/receive';

const PrivateRoutes = (props) => ( 
  <span>
    <Route path='/settings' component={Settings} /> 
    <Route path='/collection' component={Collection} /> 
  </span>
);

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
          <div className='mt-4 mb-4'>
            <Switch>
              <Route path='/' exact render={props => <Login {...props} onSignIn={this.handleSignIn} />} />
              <Route path='/logout' render={props => <Logout {...props} onSignIn={this.handleSignIn} />} />
              <Route path='/about' component={About} />
              { this.state.isSignedIn 
                ? <PrivateRoutes />
                : <Redirect to={{ pathname: '/', state: { from: this.props.location } }} /> }
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer user={this.state.user}/>
        </div>
      </Router>
    );
  }
}

export default App;
