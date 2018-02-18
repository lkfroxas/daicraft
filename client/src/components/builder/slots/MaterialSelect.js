import React from 'react';
import GenericSelect from '../../shared/GenericSelect.js';

class MaterialSelect extends React.Component {
  state = { materials: [] };

  getMaterials() {
    fetch(`/materials?tier=${this.props.tier}&materialType=${this.props.materialType}&property=${this.props.property}`)
      .then(res => { return res.json(); })
      .then(data => { this.setState({ materials: data }); });
  }

  componentDidMount() {
    this.getMaterials();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.property !== prevProps.property) {
      this.getMaterials();
    }
  }

  render() {
    const options = this.state.materials.map(material => ({
      value: material,
      name: material
    }));

    return (
      <GenericSelect
        onChange={this.props.onChange}
        name="Material"
        options={options}
      />
    );
  }
}

export default MaterialSelect;
