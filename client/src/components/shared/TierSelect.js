import React from 'react';
import GenericSelect from './GenericSelect.js';

let TierSelect = function(props) {
  const tiers = props.tiers.map((tier, index) => ({
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

export default TierSelect;
