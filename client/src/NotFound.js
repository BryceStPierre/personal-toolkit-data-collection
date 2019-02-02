import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

class NotFound extends Component {
  componentDidMount () {
    document.title = '404 | Bryce St. Pierre';
  }

  render () {
    return (
      <Container>
        <Row className={'justify-content-center'}>
          <Col xs={12} sm={10} md={8} lg={8} xl={6}>
            <h3>404</h3>
            <p>Oops! That link is either broken or does not exist.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NotFound;
