import React from 'react';
import BuilderOption from './BuilderOption.js';
import CraftActions from '../actions/CraftActions.js';

function TierSelect(props) {
  return (
    <select onChange={props.onChange}>
      <option value="">Tier</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  );
}

class PropertySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: []
    };
  }

  getProperties() {
    fetch(`/properties?tier=${this.props.tier}&slotTypeId=${this.props.slotTypeId}&materialTypeId=${this.props.materialTypeId}`)
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
    const options = this.state.properties.map(property => {
      return (
        <BuilderOption
          key={property.PropertyId}
          value={property.PropertyId}
          name={property.PropertyName}
        />
      );
    });

    return (
      <select onChange={this.props.onChange}>
        <option value="">Property</option>
        {options}
      </select>
    );
  }
}

class MaterialSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materials: []
    };
  }

  getMaterials() {
    fetch(`/materials?tier=${this.props.tier}&materialTypeId=${this.props.materialTypeId}&propertyId=${this.props.propertyId}`)
      .then(res => { return res.json(); })
      .then(data => { this.setState({ materials: data }); });
  }

  componentDidMount() {
    this.getMaterials();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.propertyId !== prevProps.propertyId) {
      this.getMaterials();
    }
  }

  render() {
    const options = this.state.materials.map(material => {
      return (
        <BuilderOption
          key={material.MaterialId}
          value={material.MaterialId}
          name={material.MaterialName}
        />
      );
    });

    return (
      <select onChange={this.props.onChange}>
        <option value="">Material</option>
        {options}
      </select>
    );
  }
}

class Slot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyId: ""
    };
  }

  handleTierChange(event) {
    this.setState({
      propertyId: ""
    });
    CraftActions.selectSlotTier(this.props.index, event.target.value);
  }

  handlePropertyChange(event) {
    this.setState({
      propertyId: event.target.value
    });
    CraftActions.selectSlotProperty(this.props.index, event.target.selectedOptions[0].text);
  }

  handleMaterialChange(event) {
    CraftActions.selectSlotMaterial(this.props.index, event.target.selectedOptions[0].text);
  }

  render() {
    const property = (this.props.slot.tier === "") ? this.props.slot.slotType : (
      <PropertySelect
        tier={this.props.slot.tier}
        slotTypeId={this.props.slot.slotTypeId}
        materialTypeId={this.props.slot.materialTypeId}
        onChange={this.handlePropertyChange.bind(this)}
      />
    );

    const material = (this.state.propertyId === "") ? this.props.slot.materialType : (
      <MaterialSelect
        tier={this.props.slot.tier}
        materialTypeId={this.props.slot.materialTypeId}
        propertyId={this.state.propertyId}
        onChange={this.handleMaterialChange.bind(this)}
      />
    );

    return (
      <tr>
        <th>{this.props.slot.slotType}</th>
        <td>
          <TierSelect
            onChange={this.handleTierChange.bind(this)}
          />
        </td>
        <td>{property}</td>
        <td>{material}</td>
        <td>{this.props.slot.quantity}</td>
      </tr>
    );
  }
}

class SlotPanel extends React.Component {
  getSlots() {
    fetch(`/slots?schematicId=${this.props.schematic.id}`)
      .then(res => { return res.json() })
      .then(data => { CraftActions.setSlots(data) });
  }

  componentDidMount() {
    this.getSlots();
  }

  componentDidUpdate(prevProps) {
    if (this.props.schematic.id !== prevProps.schematic.id) {
      this.getSlots();
    }
  }

  handleAddClick() {
    CraftActions.addItem(this.props.schematic);
  }

  render() {
    const slotRows = this.props.schematic.slots.map((slot, index) => {
      return (
        <Slot
          key={slot.slotId}
          index={index}
          slot={slot}
        />
      );
    })

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Slot</th>
              <th>Tier</th>
              <th>Property</th>
              <th>Material</th>
              <th>Quantity</th>
            </tr>
            {slotRows}
          </tbody>
        </table>
        <button onClick={this.handleAddClick.bind(this)}>Add Schematic</button>
      </div>
    );
  }
}

export default SlotPanel;
