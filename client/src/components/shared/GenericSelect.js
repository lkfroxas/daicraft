import React from 'react';
import SelectOption from './SelectOption.js';
import Select from './Select.js';

let GenericSelect = function(props) {
  const options = props.options.map(option => {
    return (
      <SelectOption
        key={option.value}
        value={option.value}
        name={option.name}
      />
    );
  });

  return (
    <Select
      onChange={props.onChange}
      blankOptionName={props.name}
      options={options}
    />
  );
}

export default GenericSelect;
