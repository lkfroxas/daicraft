import React from 'react';
import ItemSlot from './ItemSlot.js';
import { Table } from 'react-bootstrap';

let ItemSlotTable = function(props) {
  const slots = props.slots.map((slot, index) => {
    if (slot.property !== "" && slot.material !== "") {
      return (
        <ItemSlot
          key={index}
          type={slot.type}
          property={slot.property}
          material={slot.material}
          quantity={slot.quantity}
        />
      );
    } else {
      return "";
    }
  });

  return (
    <Table condensed>
      <thead>
        <tr>
          <th>Slot</th>
          <th>Property</th>
          <th>Material</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {slots}
      </tbody>
    </Table>
  );
}

export default ItemSlotTable;
