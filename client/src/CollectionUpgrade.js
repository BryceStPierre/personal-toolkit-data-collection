import React, { Component } from 'react';

import { 
  Container, Row, Col, Button, 
  Form, FormGroup, Label, Input
} from 'reactstrap';

import { 
  FaMicrophoneAlt, FaPlus, FaPaperPlane, FaUpload
} from 'react-icons/fa';

import MetaEntryCreate from './MetaEntryCreate';
import MetaEntrySelect from './MetaEntrySelect';

import receive from './utils/receive';
import send from './utils/send';

const defaultFlags = {
  newDomain: false,
  newCategory: false
}

const defaultState = {
  data: '',
  domain: 0,
  category: 0,
  newDomain: '',
  newCategory: '',
  domainsList: [],
  categoriesList: [],  
  flags: defaultFlags
};

class CollectionUpgrade extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }
  
  componentDidMount () {
    document.title = 'Data Collection | Bryce St. Pierre';
    //this.getDomainsList();
  }

  getDomainsList = () => {
    receive('/api/domain', list => {
      this.setState({ domainsList: list });
    });
  }

  getCategoriesList = (domain) => {
    receive(`/api/category/${domain}`, list => {
      this.setState({ categoriesList: list });
    });
  }

  handleNewEntryToggle = (e) => {
    let flags = Object.assign({}, this.state.flags);
    flags[e.target.value] = true;
    this.setState({ flags });
  }

  handleNewEntryCreate = (e) => {
    let flags = Object.assign({}, this.state.flags);
    flags[e.target.value] = false;
    let name = e.target.value;

    if (e.target.value === 'newDomain') {
      send('/api/domain', {
        domain: this.state.newDomain
      }, res => {
        this.getDomainsList();
        this.resetNewEntry(name, flags);
      });
    } else if (e.target.value === 'newCategory') {
      send('/api/category', {
        domain: this.state.domain,
        categoryLabel: this.state.newCategory
      }, res => {
        this.getCategoriesList(this.state.domain);
        this.resetNewEntry(name, flags);
      });
    }
  }

  handleNewEntryCancel = (e) => {
    let flags = Object.assign({}, this.state.flags);
    flags[e.target.name] = false;
    this.resetNewEntry(e.target.name, flags);
  }

  resetFlags = () => {
    this.setState({ flags: defaultFlags });
  }


  resetNewEntry = (name, flags) => {
    this.setState({
      [name]: '',
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
      [e.target.name]: e.target.value
    }, () => this.getCategoriesList(this.state.domain));
  }

  handleRecord = (e) => {

  };

  handleSubmitData = (e) => {
    e.preventDefault();

    send('/api/data', {
      domain: this.state.domain,
      category: this.state.category,
      value: this.state.data
    }, res => {
      console.log(res.message);
      this.setState(defaultState);
    });
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
          <Col sm={12} md={8} lg={8} xl={6}>
            <Form onSubmit={this.handleSubmitData}>
              { !newDomain && <MetaEntrySelect
                name='domain'
                label='Domain'
                newEntryValue='newDomain'
                noRows='No domains created yet.'
                list={this.state.domainsList}
                onMetaChange={this.handleMetaChange}
                onNewEntryToggle={this.handleNewEntryToggle} /> }

              {/* { !newDomain && <FormGroup className={'text-center'}>
                <Button 
                  color='primary' 
                  value='newDomain' 
                  onClick={this.handleNewEntryToggle}>
                  New&ensp;<FaPlus />
                </Button>
              </FormGroup> } */}

              { newDomain && <MetaEntryCreate
                  name='newDomain'
                  label='New Domain'
                  placeholder='New domain name...'
                  value={this.state.newDomain}
                  onRecord={this.handleRecord}
                  onCreate={this.handleNewEntryCreate}
                  onCancel={this.handleNewEntryCancel}
                  onInputChange={this.handleInputChange}>
                <FaMicrophoneAlt />
              </MetaEntryCreate> }
            
              { !newCategory && <MetaEntrySelect 
                name='category'
                label='Category'
                newEntryValue='newCategory'
                noRows='No categories created yet.'
                list={this.state.categoriesList}
                onMetaChange={this.handleMetaChange}
                onNewEntryToggle={this.handleNewEntryToggle} /> }

              {/* { !newCategory && <FormGroup className={'text-center'}>
                <Button 
                  color='primary' 
                  value='newCategory' 
                  onClick={this.handleNewEntryToggle}>
                  New&ensp;<FaPlus />
                </Button>
              </FormGroup> } */}

              { newCategory && <MetaEntryCreate
                  name='newCategory'
                  label='New Category'
                  placeholder='New category...'
                  value={this.state.newCategory}
                  onRecord={this.handleRecord}
                  onCreate={this.handleNewEntryCreate}
                  onCancel={this.handleNewEntryCancel}
                  onInputChange={this.handleInputChange}>
                <FaMicrophoneAlt />
              </MetaEntryCreate> }

              <FormGroup>
                <Label for='data'>Data &emsp;
                  <Button size='sm' color='danger'>Record&ensp;<FaMicrophoneAlt /></Button>
                </Label>
                <Input 
                  id='data' 
                  name='data' 
                  type='textarea'
                  value={this.state.data} 
                  onChange={this.handleInputChange} />
              </FormGroup>

              <FormGroup className={'text-center'}>{' '}
                <Button color='success' type='submit'>Insert&ensp;<FaUpload /></Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CollectionUpgrade;
