import React from 'react';
import CraftActions from '../actions/CraftActions.js';

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

    const rune = (!this.props.item.hasRune || !this.props.item.rune) ? "" : (
      <div>
        Rune: {this.props.item.rune.name}
      </div>
    );

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
        {rune}
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
