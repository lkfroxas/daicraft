import React from 'react';
import BuilderOption from './BuilderOption.js';
import RunePanel from './RunePanel.js';
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
    const options = this.state.properties.map(property => {
      return (
        <BuilderOption
          key={property}
          value={property}
          name={property}
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
    const options = this.state.materials.map(material => {
      return (
        <BuilderOption
          key={material}
          value={material}
          name={material}
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
      property: ""
    };
  }

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
    fetch(`/schematics/${this.props.schematic._id}`)
      .then(res => { return res.json() })
      .then(data => {
        CraftActions.setSchematicData(data);
      });
  }

  componentDidMount() {
    this.getSlots();
  }

  componentDidUpdate(prevProps) {
    if (this.props.schematic._id !== prevProps.schematic._id) {
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
          key={index}
          index={index}
          slot={slot}
        />
      );
    })

    const runePanel = (!this.props.schematic.hasRune) ? "" : (
      <RunePanel
        schematicType={this.props.schematic.type}
      />
    );

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
        {runePanel}
        <button onClick={this.handleAddClick.bind(this)}>Add Schematic</button>
      </div>
    );
  }
}

export default SlotPanel;
