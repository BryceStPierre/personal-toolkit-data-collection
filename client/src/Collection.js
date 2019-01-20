import React, { Component } from 'react';

import { 
  Container, Row, Col, Button, 
  Form, FormGroup, Label, Input
} from 'reactstrap';
import { 
  FaMicrophoneAlt, FaPlus, FaPaperPlane
} from 'react-icons/fa';

import NewMetaEntry from './NewMetaEntry';
import MetaEntrySelect from './MetaEntrySelect';

// const fakeDoms = [
//   { label: 'DLabel1', value: 1 },
//   { label: 'DLabel2', value: 2 },
//   { label: 'DLabel3', value: 3 }
// ];
// const fakeCats = [
//   { label: 'CLabel1', value: 1 },
//   { label: 'CLabel2', value: 2 },
//   { label: 'CLabel3', value: 3 }
// ]

const defaultState = {
  stage: 0,
  domain: 0,
  category: 0,
  newDomain: '',
  newCategory: '',
  flags: {
    newDomain: false,
    newCategory: false
  },
  listOfDomains: [],
  listOfCategories: [],
  data: ''
};

class Collection extends Component {
  constructor(props) {
    super(props);
  
    this.state = defaultState;
  }
  
  componentDidMount () {
    document.title = 'Data Collection | Bryce St. Pierre';

    this.setState({
      // listOfDomains: fakeDoms,
      // listOfCategories: fakeCats
    });
  }

  handleNewEntryToggle = (e) => {
    let flags = Object.assign({}, this.state.flags);
    flags[e.target.value] = true;
    this.setState({ flags });
  }

  handleNewEntrySubmit = (e) => {
    let flags = Object.assign({}, this.state.flags);
    flags[e.target.value] = false;

    this.setState({
      flags: flags
    });
  }

  handleNewEntryCancel = (e) => {
    let flags = Object.assign({}, this.state.flags);
    flags[e.target.value] = false;

    this.setState({
      [e.target.value]: '',
      flags: flags
    });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleMetaChange = (e) => {
    this.setState({
      stage: e.target.value,
      [e.target.name]: e.target.value
    });
  }

  handleRecord = (e) => {

  };

  handleSubmitData = (e) => {
    e.preventDefault();

  };

  render () {
    const { newDomain, newCategory } = this.state.flags;

    return (
      <Container className={'mt-4'}>
        <Row className={'mb-3'}>
          <Col>
            <h3>Collection</h3>
          </Col>
        </Row>
        <Row className={'justify-content-center'}>
          <Col sm={8}>
            <Form onSubmit={this.handleSubmitData}>
            
              { !newDomain && <MetaEntrySelect 
                name='domain'
                label='Domain'
                singular='domain'
                plural='domains'
                list={this.state.listOfDomains}
                onMetaChange={this.handleMetaChange} /> }

              { !newDomain && <FormGroup className={'text-center'}>
                <Button color='primary' value='newDomain' onClick={this.handleNewEntryToggle}>New Domain&ensp;<FaPlus /></Button>
              </FormGroup> }

              { newDomain && <NewMetaEntry
                  name='newDomain'
                  value={this.state.newDomain}
                  label='New Domain'
                  placeholder='New domain, topic, data of interest...'
                  onRecord={this.handleRecord}
                  onCreate={this.handleNewEntrySubmit}
                  onCancel={this.handleNewEntryCancel}
                  onInputChange={this.handleInputChange}>
                <FaMicrophoneAlt />
              </NewMetaEntry> }

              { this.state.stage > 0 && !newCategory && <MetaEntrySelect 
                name='category'
                label='Category'
                singular='category'
                plural='categories'
                list={this.state.listOfCategories}
                onMetaChange={this.handleMetaChange} /> }

              { this.state.stage > 0 && !newCategory && <FormGroup className={'text-center'}>
                <Button color='primary' value='newCategory' onClick={this.handleNewEntryToggle}>New Category&ensp;<FaPlus /></Button>
              </FormGroup> }

              { newCategory && <NewMetaEntry
                  name='newCategory'
                  value={this.state.newCategory}
                  label='New Category'
                  placeholder='New category, classification, grouping...'
                  onRecord={this.handleRecord}
                  onCreate={this.handleNewEntrySubmit}
                  onCancel={this.handleNewEntryCancel}
                  onInputChange={this.handleInputChange}>
                <FaMicrophoneAlt />
              </NewMetaEntry> }

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
