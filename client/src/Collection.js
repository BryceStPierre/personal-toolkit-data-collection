import React, { Component } from 'react';

import { 
  Container, Row, Col, Button, ButtonGroup,
  Form, FormGroup, Label, Input
} from 'reactstrap';

import { FaKeyboard, FaMicrophone } from 'react-icons/fa';

class Collection extends Component {
  render () {
    return (
      <Container className={"mt-4"}>
        <Row className={"mb-3"}>
          <Col>
            <h3>Collection</h3>
          </Col>
        </Row>

        <Row className={'justify-content-center'}>
          <Col md={4} lg={6}>
            <ButtonGroup className={'w-100'}>
              <Button color='primary'>Type &ensp;<FaKeyboard /></Button>
              <Button color='danger'>Record &ensp;<FaMicrophone /></Button>
            </ButtonGroup>
            <Form>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" value="HEllo this is the text" />
              </FormGroup>
            </Form>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Collection;
