import React, { Component } from 'react';

import { 
  Button, FormGroup, Label, 
  Input, InputGroup, InputGroupAddon
} from 'reactstrap';

import { FaMicrophoneAlt, FaCheck, FaTimes } from 'react-icons/fa';

class MetaOptionCreate extends Component {
  render () {
    return (
      <FormGroup>
        <Label for={this.props.name}>{this.props.label}</Label>
        <InputGroup>
          <Input 
            id={this.props.name}
            autoComplete='off'
            name={this.props.name}
            value={this.props.value}
            placeholder={this.props.placeholder} 
            onChange={this.props.onInputChange} />
          <InputGroupAddon addonType='append'>
            <Button 
              color='primary' 
              value={this.props.name} 
              onClick={this.props.onRecord}>
              <FaMicrophoneAlt />
            </Button>
          </InputGroupAddon>
          <InputGroupAddon addonType='append'>
            <Button 
              color='success' 
              value={this.props.name} 
              onClick={this.props.onCreate}>
              <FaCheck />
            </Button>
          </InputGroupAddon>
          <InputGroupAddon addonType='append'>
            <Button 
              color='danger' 
              value={this.props.name} 
              onClick={this.props.onCancel}>
              <FaTimes />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    );
  }
}

export default MetaOptionCreate;
