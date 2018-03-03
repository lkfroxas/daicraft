import React from 'react';
import SchematicPick from './SchematicPick.js';
import SchematicAssemble from './SchematicAssemble.js';
import CraftActions from '../../actions/CraftActions.js';
import { Panel, Button } from 'react-bootstrap';

class BuilderSection extends React.Component {
  handleAddClick() {
    CraftActions.addItem(this.props.schematic);
  }

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
            <Panel.Footer>
              <Button onClick={this.handleAddClick.bind(this)}>Add Schematic</Button>
            </Panel.Footer>
          </Panel.Collapse>
        </Panel>
      </section>
    );
  }
}

export default BuilderSection;
