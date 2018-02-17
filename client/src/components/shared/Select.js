import React from 'react';

let Select = function(props) {
  return (
    <select onChange={props.onChange}>
      <option value="">{props.blankOptionName}</option>
      {props.options}
    </select>
  );
};

export default Select;
