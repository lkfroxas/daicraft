import React from 'react';
import SchematicTypeSelect from './SchematicTypeSelect.js';
import SchematicSelect from './SchematicSelect.js';
import CraftActions from '../../actions/CraftActions.js';

class SchematicPick extends React.Component {
  state = { schematicType: "" };

  handleSchematicTypeChange(event) {
    this.setState({
      schematicType: event.target.value,
    });
    if (this.props.schematic._id !== "") CraftActions.selectSchematic("", "");
  }

  handleSchematicChange(event) {
    let name = event.target.selectedOptions[0].text;
    if (name === "Schematic") name = "";
    CraftActions.selectSchematic(event.target.value, name);
  }

  render() {
    const selectSchematic = (this.state.schematicType === "") ? "" : (
      <SchematicSelect
        schematicType={this.state.schematicType}
        schematic={this.props.schematic}
        onChange={this.handleSchematicChange.bind(this)}
      />
    );

    return (
      <div>
        <SchematicTypeSelect
          onChange={this.handleSchematicTypeChange.bind(this)}
        />
        {selectSchematic}
      </div>
    );
  }
}

export default SchematicPick;
