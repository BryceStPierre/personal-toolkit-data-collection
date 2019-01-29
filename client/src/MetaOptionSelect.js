import React, { Component } from 'react';

import { FormGroup, Label, Input, Button } from 'reactstrap';

import { FaPlus } from 'react-icons/fa';

import MetaOption from './MetaOption';

class MetaOptionSelect extends Component {
  render () {
    return (
      <FormGroup>
        <Label for={this.props.name}>{this.props.label} &emsp;
          <Button
            size='sm'
            color='primary'
            value={this.props.newOptionName}
            onClick={this.props.onNewOptionToggle}>
            New&ensp;<FaPlus />
          </Button>
        </Label>
        <Input
          type='select' 
          id={this.props.name} 
          name={this.props.name} 
          onChange={this.props.onOptionChange}>
          { this.props.list.length === 0 && <MetaOption key={0} value={0} label={this.props.noRows} /> }
          { this.props.list.map(i => <MetaOption key={i.value} value={i.value} label={i.text}/>) }
        </Input>
      </FormGroup>
    );
  } 
}

export default MetaOptionSelect;