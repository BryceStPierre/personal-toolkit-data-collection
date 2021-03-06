import React, { Component } from 'react';

import { 
  Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert
} from 'reactstrap';

import { FaMicrophoneAlt, FaUpload } from 'react-icons/fa';

import MetaOptionCreate from './components/MetaOptionCreate';
import MetaOptionSelect from './components/MetaOptionSelect';

import receive from './utils/receive';
import send from './utils/send';
import values from './utils/values'

class Collection extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: '',
      domain: 0,
      category: 0,
      dataType: 1,
      newDomain: '',
      newCategory: '',
      domainList: [],
      categoryList: [],  
      resultMessage: '',
      flags: {
        newDomain: false,
        newCategory: false
      }
    };
  }
  
  componentDidMount () {
    document.title = 'Data Collection | Bryce St. Pierre';

    receive('/api/domain', list => {
      let domain = list.length > 0 ? list[0].value : 0;
      this.setState({ 
        domainList: list,
        domain: domain
      }, () => {
        receive(`/api/category/${domain}`, list => {
          this.setState({ categoryList: list });
        });
      });
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    send('/api/data', {
      domain: this.state.domain,
      category: this.state.category,
      value: this.state.data,
      dataType: this.state.dataType
    }, res => {
      this.setState({
        data: '',
        resultMessage: res.message
      });
    });
  };

  handleChange = (name, value) => {
    if (name === 'domain') {
      receive(`/api/category/${value}`, list => {
        let category = list.length > 0 ? list[0].value : 0;
        this.setState({ 
          domain: value,
          category: category,
          categoryList: list,
          resultMessage: ''
        });
      });
    } else {
      this.setState({ 
        [name]: value, 
        resultMessage: '' 
      });
    }
  };

  handleInput = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value,
      resultMessage: ''
    });
  };

  handleToggleNewOption = (flag) => {
    let flags = { newDomain: false, newCategory: false };
    flags[flag] = true;
    this.setState({ flags });
  };

  handleCreateNewOption = (name) => {
    if (name === 'newDomain')
      this.handleCreateNewDomain();
    else if (name === 'newCategory')
      this.handleCreateNewCategory();
  };

  handleCreateNewDomain = () => {
    send('/api/domain', {
      domain: this.state.newDomain
    }, list => {
      let domain = list.length > 0 ? list[0].value : 0;
      this.setState({
        newDomain: '',
        domain: domain,
        domainList: list,
        flags: { newDomain: false, newCategory: false }
      });
    });
  };

  handleCreateNewCategory = () => {
    send('/api/category', {
      domain: this.state.domain,
      categoryLabel: this.state.newCategory
    }, list => {
      this.setState({
        newCategory: '',
        categoryList: list,
        flags: { newDomain: false, newCategory: false }
      });
    });
  };

  handleCancelNewOption = () => {
    this.setState({ 
      newDomain: '',
      newCategory: '',
      flags: { newDomain: false, newCategory: false }
    });
  };

  render () {
    const { flags } = this.state;
    
    return (
      <Container>
        <Row className={'justify-content-center'}>
          <Col xs={12} sm={10} md={8} lg={8} xl={6}>
            <h3 className={'mb-4'}>Collection</h3>
            <Form onSubmit={this.handleSubmit}>

              { !flags.newDomain && <MetaOptionSelect
                  name='domain'
                  label='Domain'
                  flag='newDomain'
                  noRows='No domains created yet.'
                  list={this.state.domainList}
                  onChange={this.handleChange}
                  onToggleNewOption={this.handleToggleNewOption} /> }

              { flags.newDomain && <MetaOptionCreate
                  name='newDomain'
                  label='New Domain'
                  placeholder='New domain name...'
                  value={this.state.newDomain}
                  onChange={this.handleChange} 
                  onCreate={this.handleCreateNewOption}
                  onCancel={this.handleCancelNewOption} /> }
            
              { !flags.newCategory && <MetaOptionSelect 
                  name='category'
                  label='Category'
                  flag='newCategory'
                  noRows='No categories created yet.'
                  list={this.state.categoryList}
                  onChange={this.handleChange}
                  onToggleNewOption={this.handleToggleNewOption} /> }

              { flags.newCategory && <MetaOptionCreate
                  name='newCategory'
                  label='New Category'
                  placeholder='New category...'
                  value={this.state.newCategory}
                  onChange={this.handleChange} 
                  onCreate={this.handleCreateNewOption}
                  onCancel={this.handleCancelNewOption} /> }

              <FormGroup className={'mb-4'}>
                <Label for='data'>Data &emsp;
                  <Button 
                    size='sm'
                    color='danger'>
                    Record&ensp;<FaMicrophoneAlt />
                  </Button> &emsp;
                  <Input
                    bsSize='sm'
                    type='select'
                    id='dataType'
                    name='dataType'
                    onChange={this.handleInput}>
                    { values.dataTypes.map(d => <option key={d.value} value={d.value}>{d.label}</option>) }
                  </Input>
                </Label>
                <Input 
                  id='data'
                  name='data' 
                  type='textarea'
                  value={this.state.data} 
                  onChange={this.handleInput} 
                  placeholder='Press "Record" or type value...' />
              </FormGroup>

              <FormGroup className={'text-center'}>
                <Button 
                  type='submit'
                  color='success'>
                  Insert&ensp;<FaUpload />
                </Button>
              </FormGroup>

              { this.state.resultMessage !== '' && 
                <Alert color={this.state.resultMessage.includes('Success') ? 'success' : 'danger'}>
                  {this.state.resultMessage}
                </Alert> } 
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Collection;
