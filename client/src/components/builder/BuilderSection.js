import React from 'react';
import SchematicPick from './SchematicPick.js';
import SchematicAssemble from './SchematicAssemble.js';
import { Panel } from 'react-bootstrap';

class BuilderSection extends React.Component {
  render() {
    const schematicAssemble = (this.props.schematic.name === "") ? "" : (
      <SchematicAssemble
        schematic={this.props.schematic}
      />
    );

    return (
      <section>
        <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              <h3>Build Item</h3>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <SchematicPick
                schematic={this.props.schematic}
              />
              {schematicAssemble}
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </section>
    );
  }
}

export default BuilderSection;
