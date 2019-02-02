import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { 
  Container, Row, Col, Button, Label,
  Input, Form, FormFeedback, FormGroup
} from 'reactstrap';

import { FaRegArrowAltCircleRight } from 'react-icons/fa';

import receive from './utils/receive';

class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      password: '',
      redirect: false,
      errorMessage: ''
    };
  }
  
  componentDidMount () {
    document.title = 'Sign In | Bryce St. Pierre';

    receive('/api/authenticate', user => {
      this.setState({ redirect: user ? true : false });
    });
  }

  handleChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleLogin = (e) => {
    e.preventDefault();

    fetch('/api/authenticate', {
      method: 'post',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        username: 'owner', 
        password: this.state.password
      })
    })
    .then(res => res.status === 401 ? null : res.json())
    .then(user => {
      if (user)
        this.props.onSignIn(user);
      this.setState({
        redirect: user ? true : false,
        errorMessage: user ? '' : 'Incorrect password. Please try again.'
      });
    });
  }

  render () {
    if (this.state.redirect)
      return <Redirect to='/collection' />;

    return (
      <Container>
        <Row className={'justify-content-center'}>
          <Col xs={12} sm={10} md={8} lg={8} xl={6}>
            <h3 className={'mb-3'}>Sign In</h3>
            <p>Please provide your password.</p>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label for='password' hidden>Password</Label>
                <Input 
                  id='password' 
                  name='password' 
                  type='password' 
                  placeholder='Password'
                  value={this.state.password}
                  invalid={this.state.errorMessage ? true : false}
                  onChange={this.handleChange} />
                { this.state.errorMessage && <FormFeedback>
                  {this.state.errorMessage}
                </FormFeedback> } 
              </FormGroup>
              <Button 
                color='primary' 
                type='submit'>
                Proceed&ensp;<FaRegArrowAltCircleRight />
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
