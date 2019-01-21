import React, { Component } from 'react';

import { 
  Button, FormGroup, Label, 
  Input, InputGroup, InputGroupAddon
} from 'reactstrap';

import { FaCheck, FaTimes } from 'react-icons/fa';

class MetaEntryCreate extends Component {
  render() {
    const { label, name, value, placeholder } = this.props;

    return (
      <div>
        <FormGroup>
          <Label for={name}>{label}</Label>
          <InputGroup>
            <Input 
              id={name}
              name={name}
              value={value} 
              placeholder={placeholder} 
              onChange={this.props.onInputChange} />
            <InputGroupAddon addonType='append'>
              <Button 
                color='danger' 
                value={name} 
                onClick={this.props.onRecord} >
                {this.props.children}
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
        <FormGroup className={'text-center'} >
          <Button 
            color='success' 
            value={name} 
            onClick={this.props.onCreate} >
            Create&ensp;<FaCheck />
          </Button>
          {' '}
          <Button 
            color='danger' 
            value={name} 
            onClick={this.props.onCancel} >
            Cancel&ensp;<FaTimes />
          </Button>
        </FormGroup>
      </div>
    )
  }
}

export default MetaEntryCreate;
