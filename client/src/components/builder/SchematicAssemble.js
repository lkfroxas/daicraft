import React from 'react';
import SlotPanel from './slots/SlotPanel.js';
import RunePanel from './runes/RunePanel.js';
import CraftActions from '../../actions/CraftActions.js';

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
        <button onClick={this.handleAddClick.bind(this)}>Add Schematic</button>
      </div>
    );
  }
}

export default SchematicAssemble;
