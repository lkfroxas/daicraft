import React from 'react';
import CraftActions from '../actions/CraftActions.js';

function ItemSlot(props) {
  return (
    <tr>
      <td>{props.slotType}</td>
      <td>{props.property}</td>
      <td>{props.material}</td>
      <td>{props.quantity}</td>
    </tr>
  );
}

class Item extends React.Component {
  handleRemoveClick() {
    CraftActions.removeItem(this.props.index, this.props.item);
  }

  render() {
    const slots = this.props.item.slots.map((slot, index) => {
      if (slot.property !== "" && slot.material !== "") {
        return (
          <ItemSlot
            key={index}
            slotType={slot.slotType}
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
      <section>
        <h4>{this.props.item.name}</h4>
        <table>
          <tbody>
            <tr>
              <th>Slot</th>
              <th>Property</th>
              <th>Material</th>
              <th>Quantity</th>
            </tr>
            {slots}
          </tbody>
        </table>
        <button onClick={this.handleRemoveClick.bind(this)}>Delete</button>
      </section>
    );
  }
}

class ItemList extends React.Component {
  render() {
    const items = this.props.items.map((item, index) => {
      return (
        <Item
          key={index}
          index={index}
          item={item}
        />
      );
    });

    return (
      <section>
        <h3>Items</h3>
        {items}
      </section>
    );
  }
}

export default ItemList;
