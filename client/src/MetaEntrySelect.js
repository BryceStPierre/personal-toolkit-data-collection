import React from 'react';

import { FormGroup, Label, Input, Button } from 'reactstrap';

import MetaEntryOption from './MetaEntryOption';

import { 
  FaMicrophoneAlt, FaPlus, FaPaperPlane
} from 'react-icons/fa';

const MetaEntrySelect = (props) => (
  <FormGroup>
    <Label for={props.name}>{props.label} &emsp;
      <Button
        size='sm'
        color='primary' 
        value={props.newEntryValue}
        onClick={props.onNewEntryToggle}>
        New&ensp;<FaPlus />
      </Button>
    </Label>
    <Input
      type='select' 
      id={props.name} 
      name={props.name} 
      onChange={props.onChange}>
      { props.list.length === 0 && <MetaEntryOption value={0} label={props.noRows} /> }
      { props.list.map(i => <MetaEntryOption value={i.value} label={i.text}/>) }
    </Input>
  </FormGroup>
);

export default MetaEntrySelect;