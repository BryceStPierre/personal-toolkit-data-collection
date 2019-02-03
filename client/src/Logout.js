import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

class Logout extends Component {
  componentWillMount () {
    fetch('/api/authenticate', {
      method: 'delete',
      credentials: 'include'
    })
    .then(res => res.json()) 
    .then(res => {
      this.props.onSignIn(null);
    });
  }

  render () {
    return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />;
  }
}

export default Logout;
