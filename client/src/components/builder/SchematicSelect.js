import React from 'react';
import GenericSelect from '../shared/GenericSelect.js';

class SchematicSelect extends React.Component {
  state = { schematics: [] };

  getSchematics() {
    fetch(`/schematics?schematicType=${this.props.schematicType}`)
      .then(res => { return res.json(); })
      .then(data => { this.setState({ schematics: data }); });
  }

  componentDidMount() {
    this.getSchematics();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.schematicType !== prevProps.schematicType) {
      this.getSchematics();
    }
  }

  render() {
    const options = this.state.schematics.map(schematic => ({
      value: schematic._id,
      name: schematic.name
    }));

    return (
      <GenericSelect
        onChange={this.props.onChange}
        name="Schematic"
        options={options}
      />
    );
  }
}

export default SchematicSelect;
