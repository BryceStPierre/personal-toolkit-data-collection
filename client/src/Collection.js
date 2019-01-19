import React, { Component } from 'react';

import { 
  Container, Row, Col, Button, Form, FormGroup, 
  Label, Input, InputGroup, InputGroupAddon
} from 'reactstrap';
import { 
  FaMicrophoneAlt, FaPlus, FaCheck, FaPaperPlane, FaTimes
} from 'react-icons/fa';

import NewMetaEntryFormGroup from './NewMetaEntryFormGroup';

const fakeDoms = [
  { label: 'DLabel1', value: 'DValue1' },
  { label: 'DLabel2', value: 'DValue2' },
  { label: 'DLabel3', value: 'DValue3' }
];
const fakeCats = [
  { label: 'CLabel1', value: 'CValue1' },
  { label: 'CLabel2', value: 'CValue2' },
  { label: 'CLabel3', value: 'CValue3' }
]

class Collection extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      stage: 0,
      domain: null,
      category: null,
      newDomain: '',
      newCategory: '',
      addNewDomain: false,
      addNewCategory: false,
      listOfDomains: [],
      listOfCategories: [],
      data: ''
    };
  }
  
  componentDidMount () {
    document.title = 'Data Collection | Bryce St. Pierre';

    this.setState({
      listOfDomains: fakeDoms,
      listOfCategories: fakeCats
    });
  }

  handleNewEntryToggle = (e) => {
    this.setState({
      addNewDomain: e.target.value === 'newDomain',
      addNewCategory: e.target.value ==='newCategory'
    });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleMetaChange = (e) => {
    this.setState({
      stage: e.target.value === -1 ? 0 : 1,
      [e.target.name]: e.target.value
    });
  }

  handleRecord = (e) => {

  };

  handleSubmit = (e) => {
    e.preventDefault();

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
            
              { !this.state.addNewDomain && <FormGroup>
                <Label for='domain'>Domain</Label>
                <Input type='select' name='domain' id='domain' onChange={this.handleMetaChange}>
                  <option key={-1} value={-1}>
                    { this.state.listOfDomains.length === 0 ? 'No domains created yet.' : 'Select a domain.' }
                  </option>
                  { this.state.listOfDomains.map(d => (<option key={d.value} value={d.value}>{d.label}</option>)) }
                </Input>
              </FormGroup> }

              { !this.state.addNewDomain && <FormGroup className={'text-center'}>
                <Button color='primary' value='newDomain' onClick={this.handleNewEntryToggle}>New Domain&ensp;<FaPlus /></Button>
              </FormGroup> }

              { this.state.addNewDomain && (
                <div>
                  <FormGroup>
                    <Label for='newDomain'>New Domain</Label>
                    <InputGroup>
                      <Input 
                        id='newDomain'
                        name='newDomain'
                        value={this.state.newDomain} 
                        onChange={this.handleInputChange}
                        placeholder='New domain, topic, data of interest...' />
                      <InputGroupAddon addonType='append'>
                        <Button color='danger' value='newDomain' onClick={this.handleRecord}><FaMicrophoneAlt /></Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className={'text-center'}>
                    <Button color='success'>Create&ensp;<FaCheck /></Button>{' '}
                    <Button color='danger'>Cancel&ensp;<FaTimes /></Button>
                  </FormGroup>
                </div>
              ) }

              { this.state.stage > 0 && !this.state.addNewCategory && <FormGroup>
                <Label for='category'>Category</Label>
                <Input type='select' name='category' id='category' onChange={this.handleMetaChange}>
                  <option key={-1} value={-1}>
                    { this.state.listOfCategories.length === 0 ? 'No categories created yet.' : 'Select a category.' }
                  </option>
                  { this.state.listOfCategories.map(c => <option key={c.value} value={c.value}>{c.label}</option>) }
                </Input> 
              </FormGroup> }

              { this.state.stage > 0 && !this.state.addNewCategory && <FormGroup className={'text-center'}>
                <Button color='primary' value='newCategory' onClick={this.handleNewEntryToggle}>New Category&ensp;<FaPlus /></Button>
              </FormGroup> }

              { this.state.stage > 0 && this.state.addNewCategory && (
                <div>
                  <FormGroup>
                    <Label for='newCategory'>New Category</Label>
                    <InputGroup>
                      <Input 
                        id='newCategory'
                        name='newCategory'
                        value={this.state.newCategory}
                        onChange={this.handleInputChange}
                        placeholder='New category, classification, grouping...' />
                      <InputGroupAddon addonType='append'>
                        <Button color='danger' value='newCategory' onClick={this.handleRecord}><FaMicrophoneAlt /></Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className={'text-center'}>
                    <Button color='success'>Create&ensp;<FaCheck /></Button>{' '}
                    <Button color='danger'>Cancel&ensp;<FaTimes /></Button>
                  </FormGroup>
                </div>
              ) }

              { this.state.stage > 0 && <FormGroup>
                <Label for='data'>Data</Label>
                <Input 
                  id='data' 
                  name='data' 
                  type='textarea'
                  value={this.state.data} 
                  onChange={this.handleInputChange}
                  placeholder='Text, description, information...' />
              </FormGroup> }

              { this.state.stage > 0 && <FormGroup className={'text-center'}>
                <Button color='danger' onClick={this.handleRecord}>Record&ensp;<FaMicrophoneAlt /></Button>{' '}
                <Button color='success' type='submit'>Submit&ensp;<FaPaperPlane /></Button>
              </FormGroup> }

            </Form>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Collection;
