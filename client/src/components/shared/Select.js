import React from 'react';
import { FormControl } from 'react-bootstrap';

let Select = function(props) {
  return (
    <FormControl
      onChange={props.onChange}
      componentClass="select"
      placeholder="">
      <option value="">{props.blankOptionName}</option>
      {props.options}
    </FormControl>
  );
};

export default Select;
