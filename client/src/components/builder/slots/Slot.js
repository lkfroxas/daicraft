import React from 'react';
import TierSelect from '../../shared/TierSelect.js';
import PropertySelect from './PropertySelect.js';
import MaterialSelect from './MaterialSelect.js';
import CraftActions from '../../../actions/CraftActions.js';

class Slot extends React.Component {
  state = { property: "" };

  handleTierChange(event) {
    this.setState({
      property: ""
    });
    CraftActions.selectSlotTier(this.props.index, event.target.value);
  }

  handlePropertyChange(event) {
    this.setState({
      property: event.target.value
    });
    CraftActions.selectSlotProperty(this.props.index, event.target.selectedOptions[0].text);
  }

  handleMaterialChange(event) {
    CraftActions.selectSlotMaterial(this.props.index, event.target.selectedOptions[0].text);
  }

  render() {
    const property = (this.props.slot.tier === "") ? this.props.slot.type : (
      <PropertySelect
        tier={this.props.slot.tier}
        type={this.props.slot.type}
        materialType={this.props.slot.materialType}
        onChange={this.handlePropertyChange.bind(this)}
      />
    );

    const material = (this.state.property === "") ? this.props.slot.materialType : (
      <MaterialSelect
        tier={this.props.slot.tier}
        materialType={this.props.slot.materialType}
        property={this.state.property}
        onChange={this.handleMaterialChange.bind(this)}
      />
    );

    return (
      <tr>
        <th>{this.props.slot.type}</th>
        <td>
          <TierSelect
            onChange={this.handleTierChange.bind(this)}
            tiers={["1", "2", "3", "4"]}
          />
        </td>
        <td>{property}</td>
        <td>{material}</td>
        <td>{this.props.slot.quantity}</td>
      </tr>
    );
  }
}

export default Slot;
