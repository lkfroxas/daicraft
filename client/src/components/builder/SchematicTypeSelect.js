import React from 'react';
import GenericSelect from '../shared/GenericSelect.js';

class SchematicTypeSelect extends React.Component {
  state = { schematicTypes: [] };

  componentDidMount() {
    fetch('/schematicTypes')
      .then(res => { return res.json(); })
      .then(data => { this.setState({ schematicTypes: data }); });
  }

  render() {
    const options = this.state.schematicTypes.map(type => ({
      value: type,
      name: type
    }));

    return (
      <GenericSelect
        onChange={this.props.onChange}
        name="Schematic Type"
        options={options}
      />
    );
  }
}

export default SchematicTypeSelect;
