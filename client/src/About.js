import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class About extends Component {
  render () {
    return (
      <Container className={"mt-4"}>
        <Row className={"mb-3"}>
          <Col>
            <h3>About</h3>
            <p>This web app serves as an interface for collecting data used in my personal 
              toolkit. In short, through speech and text, this tool facilitates inputting
              and storing information in an efficient and accurate manner, for later use.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
