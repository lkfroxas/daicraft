import React from 'react';
import BuilderOption from './BuilderOption.js';
import SlotPanel from './SlotPanel.js';
import CraftActions from '../actions/CraftActions.js';

class SchematicTypeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schematicTypes: []
    };
  }

  componentDidMount() {
    fetch('/schematicTypes')
      .then(res => { return res.json(); })
      .then(data => { this.setState({ schematicTypes: data }); });
  }

  render() {
    const options = this.state.schematicTypes.map(type => {
      return (
        <BuilderOption
          key={type.SchematicTypeId}
          value={type.SchematicTypeId}
          name={type.SchematicTypeName}
        />
      );
    });

    return (
      <select onChange={this.props.onChange}>
        <option value="">Schematic Type</option>
        {options}
      </select>
    );
  }
}

class SchematicSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schematics: []
    };
  }

  getSchematics() {
    fetch(`/schematics?schematicTypeId=${this.props.schematicTypeId}`)
      .then(res => { return res.json(); })
      .then(data => { this.setState({ schematics: data }); });
  }

  componentDidMount() {
    this.getSchematics();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.schematicTypeId !== prevProps.schematicTypeId) {
      this.getSchematics();
    }
  }

  render() {
    const schematicOptions = this.state.schematics.map(schematic => {
      return (
        <BuilderOption
          key={schematic.SchematicId}
          value={schematic.SchematicId}
          name={schematic.SchematicName}
        />
      );
    });

    return (
      <select onChange={this.props.onChange}>
        <option value="">Schematic</option>
        {schematicOptions}
      </select>
    );
  }
}

class Builder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schematicTypeId: "",
    };
  }

  handleSchematicTypeChange(event) {
    this.setState({
      schematicTypeId: event.target.value,
    });
    if (this.props.schematic.id !== "")  CraftActions.selectSchematic("", "");
  }

  handleSchematicChange(event) {
    let name = event.target.selectedOptions[0].text;
    if (name === "Schematic") name = "";
    CraftActions.selectSchematic(event.target.value, name);
  }

  render() {
    const selectSchematic = (this.state.schematicTypeId === "") ? "" : (
      <SchematicSelect
        schematicTypeId={this.state.schematicTypeId}
        schematic={this.props.schematic}
        onChange={this.handleSchematicChange.bind(this)}
      />
    );

    const slotPanel = (this.props.schematic.name === "") ? "" : (
      <SlotPanel
        schematic={this.props.schematic}
      />
    );

    return (
      <section>
        <h3>Build Item</h3>
        <SchematicTypeSelect
          onChange={this.handleSchematicTypeChange.bind(this)}
        />
        {selectSchematic}
        {slotPanel}
      </section>
    );
  }
}

export default Builder;
