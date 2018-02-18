import React from 'react';
import GearNameList from './GearNameList.js';
import PartySelect from './PartySelect.js';

class PartyPanel extends React.Component {
  state = { partyMember: null };

  handlePartyMemberChange(event) {
    this.setState({
      partyMember: event.target.value
    });
  }

  render() {
    const gearNames = (!this.state.partyMember) ? "" : (
      <GearNameList
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
