import React from 'react';
import GenericSelect from '../../shared/GenericSelect.js';

let RuneTierSelect = function(props) {
  const tiers = ["2", "3"].map((tier, index) => ({
    value: tier,
    name: tier
  }));

  return (
    <GenericSelect
      onChange={props.onChange}
      name="Tier"
      options={tiers}
    />
  );
}

export default RuneTierSelect;
