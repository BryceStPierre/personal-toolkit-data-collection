import React, { Component } from 'react';

import { FormGroup, Label, Input, Button } from 'reactstrap';

import { FaPlus } from 'react-icons/fa';

import MetaOption from './MetaOption';

class MetaOptionSelect extends Component {

  toggleNewOption = () => {
    this.props.onToggleNewOption(this.props.flag);
  }

  handleChange = (e) => {
    this.props.onChange(this.props.name, e.target.value);
  }

  render () {
    const { name, label, noRows, list } = this.props;

    return (
      <FormGroup>
        <Label for={name}>{label} &emsp;
          <Button
            size='sm'
            color='primary'
            //value={this.props.newOptionName}
            onClick={this.toggleNewOption}>
            New&ensp;<FaPlus />
          </Button>
        </Label>
        <Input
          type='select' 
          id={name} 
          name={name} 
          onChange={this.handleChange}>
          { list.length === 0 && <MetaOption key={0} value={0} label={noRows} /> }
          { list.map(i => <MetaOption key={i.value} value={i.value} label={i.text}/>) }
        </Input>
      </FormGroup>
    );
  } 
}

export default MetaOptionSelect;