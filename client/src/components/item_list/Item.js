import React from 'react';
import ItemSlotTable from './ItemSlotTable.js';
import PartyPanel from './party/PartyPanel.js';
import CraftActions from '../../actions/CraftActions.js';

class Item extends React.Component {
  handleRemoveClick() {
    CraftActions.removeItem(this.props.index, this.props.item);
  }

  getTier() {
    const mainSlot = this.props.item.slots.find(slot => slot.type === "Main");
    if (mainSlot)
      return mainSlot.tier;

    const tiers = this.props.item.slots.map(slot => parseInt(slot.tier, 10));
    return Math.max.apply(null, tiers);
  }

  render() {
    const rune = (!this.props.item.hasRune || !this.props.item.rune) ? "" : (
      <div>
        Rune: {this.props.item.rune.name}
      </div>
    );

    const partyMember = (
      <div>
        <PartyPanel
          type={this.props.item.type}
          tier={this.getTier()}
        />
      </div>
    );

    return (
      <section>
        <h4>{this.props.item.name}</h4>
        <ItemSlotTable
          slots={this.props.item.slots}
        />
        {partyMember}
        {rune}
        <button onClick={this.handleRemoveClick.bind(this)}>Delete</button>
      </section>
    );
  }
}

export default Item;
