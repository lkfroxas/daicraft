import React from 'react';

var BuilderOption = function (props) {
  return (
    <option value={props.value}>
      {props.name}
    </option>
  );
}

export default BuilderOption;
