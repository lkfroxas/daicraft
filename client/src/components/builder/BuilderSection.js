import React from 'react';
import SchematicPick from './SchematicPick.js';
import SchematicAssemble from './SchematicAssemble.js';

class BuilderSection extends React.Component {
  render() {
    const schematicAssemble = (this.props.schematic.name === "") ? "" : (
      <SchematicAssemble
        schematic={this.props.schematic}
      />
    );

    return (
      <section>
        <h3>Build Item</h3>
        <SchematicPick
          schematic={this.props.schematic}
        />
        {schematicAssemble}
      </section>
    );
  }
}

export default BuilderSection;
