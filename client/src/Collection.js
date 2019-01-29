import React, { Component } from 'react';

import { 
  Container, Row, Col, Button, 
  Form, FormGroup, Label, Input
} from 'reactstrap';

import { FaMicrophoneAlt, FaUpload } from 'react-icons/fa';

import MetaOptionCreate from './MetaOptionCreate';
import MetaOptionSelect from './MetaOptionSelect';

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
  flags: {
    newDomain: false,
    newCategory: false
  }
};

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }
  
  componentDidMount () {
    document.title = 'Data Collection | Bryce St. Pierre';
    this.getDomainsList();
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

  handleNewOptionToggle = (e) => {
    let flags = Object.assign({}, defaultFlags);
    flags[e.target.value] = true;
    this.setState({ flags });
  }

  handleNewOptionCreate = (e) => {
    if (e.target.value === 'newDomain') {
      send('/api/domain', {
        domain: this.state.newDomain
      }, res => {
        this.setState({
          newDomain: '',
          flags: defaultFlags
        }, () => {
          this.getDomainsList();
        });
      });
    } else if (e.target.value === 'newCategory') {
      send('/api/category', {
        domain: this.state.domain,
        categoryLabel: this.state.newCategory
      }, res => {
        this.setState({
          newCategory: '',
          flags: defaultFlags
        }, () => {
          this.getCategoriesList(this.state.domain);
        });
      });
    }
  }

  handleNewDomainCreate = () => {

  }

  handleNewCategoryCreate = () => {

  }

  handleNewOptionCancel = (e) => {
    this.setState({ 
      [e.target.value]: '',
      flags: defaultFlags 
    });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOptionChange = (e) => {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    }, () => { 
      if (name === 'newDomain')
        this.getCategoriesList(this.state.domain);
    });
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

              { !this.state.flags.newDomain && <MetaOptionSelect
                  name='domain'
                  label='Domain'
                  newOptionName='newDomain'
                  noRows='No domains created yet.'
                  list={this.state.domainsList}
                  onOptionChange={this.handleOptionChange}
                  onNewOptionToggle={this.handleNewOptionToggle} /> }

              { this.state.flags.newDomain && <MetaOptionCreate
                  name='newDomain'
                  label='New Domain'
                  placeholder='New domain name...'
                  value={this.state.newDomain}
                  onRecord={this.handleRecord}
                  onCreate={this.handleNewOptionCreate}
                  onCancel={this.handleNewOptionCancel}
                  onInputChange={this.handleInputChange} /> }
            
              { !this.state.flags.newCategory && <MetaOptionSelect 
                  name='category'
                  label='Category'
                  newOptionName='newCategory'
                  noRows='No categories created yet.'
                  list={this.state.categoriesList}
                  onOptionChange={this.handleOptionChange}
                  onNewOptionToggle={this.handleNewOptionToggle} /> }

              { this.state.flags.newCategory && <MetaOptionCreate
                  name='newCategory'
                  label='New Category'
                  placeholder='New category...'
                  value={this.state.newCategory}
                  onRecord={this.handleRecord}
                  onCreate={this.handleNewOptionCreate}
                  onCancel={this.handleNewOptionCancel}
                  onInputChange={this.handleInputChange} /> }

              <FormGroup>
                <Label for='data'>Data &emsp;
                  <Button 
                    size='sm'
                    value='data'
                    color='danger'
                    onClick={this.handleRecord}>
                    Record&ensp;<FaMicrophoneAlt />
                  </Button>
                </Label>
                <Input 
                  id='data'
                  name='data' 
                  type='textarea'
                  value={this.state.data} 
                  onChange={this.handleInputChange} 
                  placeholder='Press "Record" or type value...' />
              </FormGroup>

              <FormGroup>
                <Button 
                  type='submit'
                  color='success'>
                  Insert&ensp;<FaUpload />
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Collection;
