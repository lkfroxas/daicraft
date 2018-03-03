import React from 'react';
import ItemSlotTable from './ItemSlotTable.js';
import ItemRune from './ItemRune.js';
import PartyPanel from './party/PartyPanel.js';
import CraftActions from '../../actions/CraftActions.js';
import { Panel, Button, Grid, Row, Col } from 'react-bootstrap';

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
    const partyMember = (
      <PartyPanel
        type={this.props.item.type}
        tier={this.getTier()}
      />
    );

    const bottomRow = (!this.props.item.hasRune || !this.props.item.rune) ? (
      <Grid fluid>
        <Row>
          <Col lg={12}>
            {partyMember}
          </Col>
        </Row>
      </Grid>
    ) : (
      <Grid fluid>
        <Row>
          <Col lg={8}>
            {partyMember}
          </Col>
          <Col lg={4}>
            <ItemRune
              name={this.props.item.rune.name}
            />
          </Col>
        </Row>
      </Grid>
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
              {bottomRow}
            </Panel.Body>
            <Panel.Footer>
              <Button onClick={this.handleRemoveClick.bind(this)}>Delete</Button>
            </Panel.Footer>
          </Panel.Collapse>
        </Panel>
      </section>
    );
  }
}

export default Item;
