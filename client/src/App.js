import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom';

import Navigation from './Navigation';
import Login from './Login';
import About from './About';
import Collection from './Collection';
import NotFound from './NotFound';
import Footer from './Footer';

const auth = {
  isAuthenticated: false,
  signIn (d) {
    this.isAuthenticated = true;
  },
  signOut (d) {
    this.isAuthenticated = false;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props => 
      auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isOpen: false
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
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/about' component={About} />
            <PrivateRoute path='/collection' component={Collection} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
