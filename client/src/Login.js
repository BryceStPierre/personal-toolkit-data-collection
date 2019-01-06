import React, { Component } from 'react';

import { 
  Container, Row, Col, Button, 
  Form, FormGroup, Label, Input
} from 'reactstrap';

import { FaRegArrowAltCircleRight } from 'react-icons/fa';

class Login extends Component {
  componentDidMount () {
    document.title = 'Sign In | Bryce St. Pierre';
  }

  render () {
    return (
      <Container className={'mt-4'}>
        <Row className={'justify-content-center'}>
          <Col xs={9} sm={6} md={6}>
            <h3 className={'mb-3'}>Sign In</h3>
            <p>Please provide your password.</p>
            <Form>
              <FormGroup>
                <Label for='password' hidden>Password</Label>
                <Input type='password' name='password' id='password' placeholder='Password' />
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
