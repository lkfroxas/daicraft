import React from 'react';

function ItemSlot(props) {
  return (
    <tr>
      <td>{props.type}</td>
      <td>{props.property}</td>
      <td>{props.material}</td>
      <td>{props.quantity}</td>
    </tr>
  );
}

export default ItemSlot;
