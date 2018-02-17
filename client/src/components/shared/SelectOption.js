import React from 'react';

let SelectOption = function (props) {
  return (
    <option value={props.value}>
      {props.name}
    </option>
  );
};

export default SelectOption;
