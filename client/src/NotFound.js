import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

class NotFound extends Component {
  componentDidMount () {
    document.title = '404 | Bryce St. Pierre';
  }

  render () {
    return (
      <Container className={"mt-4"}>
        <Row className={"mb-3"}>
          <Col>
            <h3>404</h3>
            <p>Oops! That link is either broken or does not exist.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NotFound;
