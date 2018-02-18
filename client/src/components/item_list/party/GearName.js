import React from 'react';

let GearName = function(props) {
  let descr = (props.descr) ? ` (${props.descr})` : "";
  return (
    <li>{props.name}{descr}</li>
  );
}

export default GearName;
