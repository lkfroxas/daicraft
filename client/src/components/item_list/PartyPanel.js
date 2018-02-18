import React from 'react';
import SelectOption from '../shared/SelectOption.js';
import Select from '../shared/Select.js';

function GearName(props) {
  let descr = (props.descr) ? `(${props.descr})` : "";
  return (
    <li>{props.name} {descr}</li>
  );
}

class GearNames extends React.Component {
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

class PartySelect extends React.Component {
  state = { partyMembers: [] };

  getPartyMembers() {
    fetch(`/party?type=${this.props.type}`)
      .then(res => res.json())
      .then(data => this.setState({ partyMembers: data }));
  }

  componentDidMount() {
    this.getPartyMembers();
  }

  render() {
    const options = this.state.partyMembers.map(member => {
      return (
        <SelectOption
          key={member._id}
          value={member._id}
          name={member.name}
        />
      );
    });

    return (
      <Select
        onChange={this.props.onChange}
        blankOptionName="Party Member"
        options={options}
      />
    );
  }
}

class PartyPanel extends React.Component {
  state = { partyMember: null };

  handlePartyMemberChange(event) {
    this.setState({
      partyMember: event.target.value
    });
  }

  render() {
    const gearNames = (!this.state.partyMember) ? "" : (
      <GearNames
        id={this.state.partyMember}
        type={this.props.type}
        tier={this.props.tier}
      />
    );

    return (
      <div>
        Party Member
        <PartySelect
          type={this.props.type}
          onChange={this.handlePartyMemberChange.bind(this)}
        />
        {gearNames}
      </div>
    );
  }
}

export default PartyPanel;
