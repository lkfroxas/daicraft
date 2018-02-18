import React from 'react';
import GenericSelect from '../../shared/GenericSelect.js';

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
    const options = this.state.partyMembers.map(member => ({
      value: member._id,
      name: member.name
    }));

    return (
      <GenericSelect
        onChange={this.props.onChange}
        name="Party Member"
        options={options}
      />
    );
  }
}

export default PartySelect;
