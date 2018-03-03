import React from 'react';
import SlotPanel from './slots/SlotPanel.js';
import RunePanel from './runes/RunePanel.js';

class SchematicAssemble extends React.Component {
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
      </div>
    );
  }
}

export default SchematicAssemble;
