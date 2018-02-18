import React from 'react';
import GearName from './GearName.js';

class GearNameList extends React.Component {
  state = { gearNames: [] }

  getGearNames() {
    fetch(`/party/${this.props.id}?type=${this.props.type}&tier=${this.props.tier}`)
      .then(res => res.json())
      .then(data => this.setState({ gearNames: data }));
  }

  componentDidMount() {
    this.getGearNames();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
      this.getGearNames();
    }
  }

  render() {
    const nameList = this.state.gearNames.map((name, index) => {
      return (
        <GearName
          key={index}
          name={name.name}
          descr={name.descr}
        />
      );
    });

    return (
      <ul>{nameList}</ul>
    );
  }
}

export default GearNameList;
