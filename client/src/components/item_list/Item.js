import React from 'react';
import ItemSlotTable from './ItemSlotTable.js';
import PartyPanel from './party/PartyPanel.js';
import CraftActions from '../../actions/CraftActions.js';
import { Panel, Button } from 'react-bootstrap';

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
        <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              {this.props.item.name}
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ItemSlotTable
                slots={this.props.item.slots}
              />
              {rune}
              {partyMember}
              <Button onClick={this.handleRemoveClick.bind(this)}>Delete</Button>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </section>
    );
  }
}

export default Item;
