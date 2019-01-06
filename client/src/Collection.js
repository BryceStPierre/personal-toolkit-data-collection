import React, { Component } from 'react';

import { 
  Container, Row, Col, Button, ButtonGroup,
  Form, FormGroup, Label, Input
} from 'reactstrap';

import { FaKeyboard, FaMicrophone } from 'react-icons/fa';

class Collection extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      text: 'Some sample text...'
    };
  }
  
  componentDidMount () {
    document.title = 'Data Collection | Bryce St. Pierre';
  }

  render () {
    return (
      <Container className={'mt-4'}>
        <Row className={'mb-3'}>
          <Col>
            <h3>Collection</h3>
          </Col>
        </Row>

        <Row className={'justify-content-center'}>
          <Col sm={6} md={6} lg={6}>
            <ButtonGroup className={'w-100'}>
              <Button color='primary'>Type &ensp;<FaKeyboard /></Button>
              <Button color='danger'>Record &ensp;<FaMicrophone /></Button>
            </ButtonGroup>
            <Form>
              <FormGroup>
                <Label for='text'>Text</Label>
                <Input type='textarea' name='text' id='text' value={this.state.text} />
              </FormGroup>
            </Form>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Collection;
