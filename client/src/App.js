import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Navigation from './Navigation';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Navigation onToggle={this.toggle} isOpen={this.state.isOpen} />
        <Container>
          <Row>
            <Col>
            
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
