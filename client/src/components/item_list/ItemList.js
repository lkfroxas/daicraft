import React from 'react';
import Item from './Item.js';
import { PanelGroup } from 'react-bootstrap';

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
        <PanelGroup accordion>
          {items}
        </PanelGroup>
      </section>
    );
  }
}

export default ItemList;
