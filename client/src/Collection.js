import React, { Component } from 'react';

import { 
  Container, Row, Col, Button, Form, FormGroup, 
  Label, Input, InputGroup, InputGroupAddon
} from 'reactstrap';
import { 
  FaKeyboard, FaMicrophone, FaMicrophoneAlt, 
  FaPlus, FaCheck, FaPaperPlane, FaTimes
} from 'react-icons/fa';

class Collection extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      method: 'text',
      domain: true,
      category: false,
      listOfDomains: [],
      listOfCategories: [],
      rawText: ''
    };
  }
  
  componentDidMount () {
    document.title = 'Data Collection | Bryce St. Pierre';
  }

  handleClick = (e) => {
    this.setState({
      method: e.target.value === 'text'
    });
  };

  handleRecord = (e) => {

  };

  handleSubmit = (e) => {
    
  };

  render () {
    return (
      <Container className={'mt-4'}>
        <Row className={'mb-3'}>
          <Col>
            <h3>Collection</h3>
          </Col>
        </Row>
        <Row className={'justify-content-center'}>
          <Col sm={8}>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup className={'text-center'}>
                <Button color='primary' value='text' onClick={this.handleClick}>Text&ensp;<FaKeyboard /></Button>{' '}
                <Button color='secondary' value='speech' onClick={this.handleClick}>Speech&ensp;<FaMicrophone /></Button>
              </FormGroup>
              <FormGroup>
                <Label for='domain'>Domain</Label>
                <Input type='select' name='domain' id='domain'>
                  { this.state.listOfDomains.length === 0 && <option>No domains created yet.</option> }
                  { this.state.listOfDomains.map(d => (<option>{d}</option>)) }
                </Input>
              </FormGroup>

              <FormGroup>
                <Button color='success'>Save&ensp;<FaCheck /></Button>{' '}
                <Button color='danger'>Cancel&ensp;<FaTimes /></Button>
              </FormGroup>

              { this.state.category && <FormGroup>
                <Label for='category'>Category</Label>
                <Input type='select' name='category' id='category'>

                </Input>
              </FormGroup> }
              <FormGroup className={'text-center'}>
                <Button color='primary' onClick={this.handleClick}>New Domain&ensp;<FaPlus /></Button>{' '}
                { this.state.category && <Button color='primary' onClick={this.handleClick}>New Category&ensp;<FaPlus /></Button> }{' '}
                
              </FormGroup>
              <FormGroup>
                <Label for='rawText'>Text</Label>
                <Input 
                  id='rawText' 
                  name='rawText' 
                  type='textarea' 
                  value={this.state.rawText} />
              </FormGroup>
              <FormGroup className={'text-center'}>
                <Button color='danger' onClick={this.handleRecord}>Record&ensp;<FaMicrophoneAlt /></Button>{' '}
                <Button color='success' type='submit'>Submit&ensp;<FaPaperPlane /></Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Collection;
