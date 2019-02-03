import React, { Component } from 'react';

import { 
  Button, FormGroup, Label, 
  Input, InputGroup, InputGroupAddon
} from 'reactstrap';

import { FaMicrophoneAlt, FaCheck, FaTimes } from 'react-icons/fa';

class MetaOptionCreate extends Component {

  handleChange = (e) => {
    this.props.onChange(this.props.name, e.target.value);
  }
  
  handleCreate = () => {
    this.props.onCreate(this.props.name);
  }

  handleCancel = () => {
    this.props.onCancel();
  }

  render () {
    const { name, label, value, placeholder } = this.props;

    return (
      <FormGroup className={'mb-4'}>
        <Label for={name}>{label}</Label>
        <InputGroup>
          <Input 
            id={name}
            name={name}
            value={value}
            autoComplete='off'
            placeholder={placeholder} 
            onChange={this.handleChange} />
          <InputGroupAddon addonType='append'>
            <Button color='primary'>
              <FaMicrophoneAlt />
            </Button>
          </InputGroupAddon>
          <InputGroupAddon addonType='append'>
            <Button 
              color='success' 
              //value={this.props.name} 
              onClick={this.handleCreate}>
              <FaCheck />
            </Button>
          </InputGroupAddon>
          <InputGroupAddon addonType='append'>
            <Button 
              color='danger' 
              //value={this.props.name} 
              onClick={this.handleCancel}>
              <FaTimes />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    );
  }
}

export default MetaOptionCreate;
