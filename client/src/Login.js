import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <Container className={"mt-4"}>
        <Row className={"mb-3"}>
          <Col>
            <h3>Page Title</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
