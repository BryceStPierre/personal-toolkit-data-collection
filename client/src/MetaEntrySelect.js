import React, { Component } from 'react';

import { FormGroup, Label, Input } from 'reactstrap';

class MetaEntrySelect extends Component {
  render() {
    const { name, label, list, plural, singular } = this.props;

    return (
      <FormGroup>
        <Label for={name}>{label}</Label>
        <Input 
          type='select' 
          id={name} 
          name={name} 
          onChange={this.props.onMetaChange}>
          <option key={0} value={0}>
            { list.length === 0 ? `No ${plural} created yet.` : `Select a ${singular}.` }
          </option>
          { list.map(i => (<option key={i.value} value={i.value}>{i.label}</option>)) }
        </Input>
      </FormGroup>
    );
  }
}

export default MetaEntrySelect;
