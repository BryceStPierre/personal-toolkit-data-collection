import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import values from './utils/values';

class About extends Component {
  componentDidMount () {
    document.title = 'About | Bryce St. Pierre';
  }

  render () {
    return (
      <Container className={"mt-4"}>
        <Row className={"mb-3"}>
          <Col>
            <h3>About</h3>
            <p>{values.paragraphs.about}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
