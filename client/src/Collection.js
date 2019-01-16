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
      //method: 'text',
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

  // handleChange = (e) => {
  //   this.setState({
  //     e.target.name: e.target.value
  //   });
  // };

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
              {/* <FormGroup className={'text-center'}>
                <Button color='primary' value='text' onClick={this.handleClick}>Text&ensp;<FaKeyboard /></Button>{' '}
                <Button color='secondary' value='speech' onClick={this.handleClick}>Speech&ensp;<FaMicrophone /></Button>
              </FormGroup> */}
              <FormGroup>
                <Label for='domain'>Domain</Label>
                <Input type='select' name='domain' id='domain'>
                  { this.state.listOfDomains.length === 0 && <option>No domains created yet.</option> }
                  { this.state.listOfDomains.map(d => (<option>{d}</option>)) }
                </Input>
              </FormGroup>

              <FormGroup className={'text-center'}>
                <Button color='primary' onClick={this.handleClick}>New Domain&ensp;<FaPlus /></Button>
              </FormGroup>

              <FormGroup>
                <InputGroup>
                  <Input 
                    id='newDomain'
                    name='newDomain'
                    value={this.newDomain} 
                    placeholder='New domain, topic, data of interest...' />
                  <InputGroupAddon addonType='append'>
                    <Button color='danger'><FaMicrophoneAlt /></Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>

              <FormGroup className={'text-center'}>
                <Button color='success'>Create&ensp;<FaCheck /></Button>{' '}
                <Button color='danger'>Cancel&ensp;<FaTimes /></Button>
              </FormGroup>

              <FormGroup>
                <Label for='category'>Category</Label>
                <Input type='select' name='category' id='category'>
                  { this.state.listOfCategories.length === 0 && <option>No categories created yet.</option> }
                  { this.state.listOfCategories.map(d => <option>{d}</option>) }
                </Input>
              </FormGroup>

              <FormGroup className={'text-center'}>
                <Button color='primary' onClick={this.handleClick}>New Category&ensp;<FaPlus /></Button>
              </FormGroup>

              <FormGroup>
                <InputGroup>
                  <Input 
                    id='newDomain'
                    name='newDomain'
                    value={this.newDomain} 
                    placeholder='New category, classification, grouping...' />
                  <InputGroupAddon addonType='append'>
                    <Button color='danger'><FaMicrophoneAlt /></Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>

              <FormGroup className={'text-center'}>
                <Button color='success'>Create&ensp;<FaCheck /></Button>{' '}
                <Button color='danger'>Cancel&ensp;<FaTimes /></Button>
              </FormGroup>

              <FormGroup>
                <Label for='rawText'>Data</Label>
                <Input 
                  id='rawText' 
                  name='rawText' 
                  type='textarea'
                  value={this.state.rawText} 
                  placeholder='Text, description, information...' />
              </FormGroup>

              <FormGroup className={'text-center'}>
                <Button color='danger' onClick={this.handleRecord}>Record&ensp;<FaMicrophoneAlt /></Button>
              </FormGroup>

              <FormGroup className={'text-center'}>
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
