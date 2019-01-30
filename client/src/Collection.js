import React, { Component } from 'react';

import { 
  Container, Row, Col, Button, Form, FormGroup, Label, Input
} from 'reactstrap';

import { FaMicrophoneAlt, FaUpload } from 'react-icons/fa';

import MetaOptionCreate from './MetaOptionCreate';
import MetaOptionSelect from './MetaOptionSelect';

import receive from './utils/receive';
import send from './utils/send';

class Collection extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: '',
      domain: 0,
      category: 0,
      newDomain: '',
      newCategory: '',
      domainList: [],
      categoryList: [],  
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
  
  handleSubmitData = (e) => {
    e.preventDefault();

    send('/api/data', {
      domain: this.state.domain,
      category: this.state.category,
      value: this.state.data
    }, res => {
      console.log(res.message);
      //this.setState(defaultState);
    });
  };

  handleChange = (name, value) => {
    if (name === 'domain') {
      receive(`/api/category/${value}`, list => {
        let category = list.length > 0 ? list[0].value : 0;
        this.setState({ 
          domain: value,
          category: category,
          categoryList: list 
        });
      });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
      this.setState({
        newDomain: '',
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

  // getDomainList = () => {
  //   receive('/api/domain', list => {
  //     this.setState({ domainList: list });
  //   });
  // }

  // getCategoryList = (domain) => {
  //   receive(`/api/category/${domain}`, list => {
  //     this.setState({ categoryList: list });
  //   });
  // }

  render () {
    const { flags } = this.state;
    
    return (
      <Container className={'mt-4'}>
        <Row className={'mb-3'}>
          <Col>
            <h3>Collection</h3>
          </Col>
        </Row>
        <Row className={'justify-content-center'}>
          <Col xs={12} sm={10} md={8} lg={8} xl={6}>
            <Form onSubmit={this.handleSubmitData}>

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

              <FormGroup>
                <Label for='data'>Data &emsp;
                  <Button 
                    size='sm'
                    color='danger'>
                    Record&ensp;<FaMicrophoneAlt />
                  </Button>
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
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Collection;
