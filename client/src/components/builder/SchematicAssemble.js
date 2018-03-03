import React from 'react';
import SlotPanel from './slots/SlotPanel.js';
import RunePanel from './runes/RunePanel.js';
import CraftActions from '../../actions/CraftActions.js';
import { Button } from 'react-bootstrap';

class SchematicAssemble extends React.Component {
  handleAddClick() {
    CraftActions.addItem(this.props.schematic);
  }

  render() {
    const runePanel = (!this.props.schematic.hasRune) ? "" : (
      <RunePanel
        schematicType={this.props.schematic.type}
      />
    );

    return (
      <div>
        <SlotPanel
          schematic={this.props.schematic}
        />
        {runePanel}
        <Button onClick={this.handleAddClick.bind(this)}>Add Schematic</Button>
      </div>
    );
  }
}

export default SchematicAssemble;
