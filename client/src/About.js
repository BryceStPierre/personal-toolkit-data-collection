import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import values from './utils/values';

class About extends Component {
  componentDidMount () {
    document.title = 'About | Bryce St. Pierre';
  }

  render () {
    return (
      <Container>
        <Row className={'justify-content-center'}>
          <Col xs={12} sm={10} md={8} lg={8} xl={6}>
            <h3>About</h3>
            <p>{values.paragraphs.about}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
