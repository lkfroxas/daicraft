import React from 'react';
import GenericSelect from '../../shared/GenericSelect.js';

class PropertySelect extends React.Component {
  state = { properties: [] };

  getProperties() {
    fetch(`/properties?tier=${this.props.tier}&slotType=${this.props.type}&materialType=${this.props.materialType}`)
      .then(res => { return res.json(); })
      .then(data => { this.setState({ properties: data }); });
  }

  componentDidMount() {
    this.getProperties();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.tier !== prevProps.tier) {
      this.getProperties();
    }
  }

  render() {
    const options = this.state.properties.map(property => ({
      value: property,
      name: property
    }));

    return (
      <GenericSelect
        onChange={this.props.onChange}
        name="Property"
        options={options}
      />
    );
  }
}

export default PropertySelect;
