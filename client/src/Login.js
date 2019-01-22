import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { 
  Container, Row, Col, Button, Label,
  Input, Form, FormFeedback, FormGroup
} from 'reactstrap';

import { FaRegArrowAltCircleRight } from 'react-icons/fa';

import send from './utils/send';
import receive from './utils/receive';

class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      error: '',
      password: '',
      redirect: false,
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

  handleSubmit = (e) => {
    e.preventDefault();

    send('/api/authenticate', {
      username: 'owner',
      password: this.state.password
    }, user => {
      if (user)
        this.props.onSignIn(user);
      this.setState({
        error: user ? '' : 'Incorrect password. Please try again.',
        redirect: user ? true : false
      });
    });
  }

  render () {
    if (this.state.redirect)
      return <Redirect to='/collection' />;

    return (
      <Container className={'mt-4'}>
        <Row className={'justify-content-center'}>
          <Col xs={9} sm={6} md={6}>
            <h3 className={'mb-3'}>Sign In</h3>
            <p>Please provide your password.</p>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for='password' hidden>Password</Label>
                <Input 
                  id='password' 
                  name='password' 
                  type='password' 
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.handleChange}
                  invalid={this.state.error ? true : false} />
                { this.state.error && <FormFeedback>{this.state.error}</FormFeedback> } 
              </FormGroup>
              <Button color='primary' type='submit'>Proceed&ensp;<FaRegArrowAltCircleRight /></Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
