import React from 'react';

const MetaEntryOption = (props) => (
  <option key={props.value} value={props.value}>{props.label}</option>
);

export default MetaEntryOption;
