import React from 'react';
import TierSelect from '../../shared/TierSelect.js';
import RuneSelect from './RuneSelect.js';
import CraftActions from '../../../actions/CraftActions.js';

class RunePanel extends React.Component {
  state = { tier: "" };

  handleTierChange(event) {
    this.setState({
      tier: event.target.value
    });
  }

  handleRuneChange(event) {
    if (event.target.value !== "") {
      fetch(`/runes/${event.target.value}`)
        .then(res => { return res.json() })
        .then(data => CraftActions.selectRune(data));
    } else {
      CraftActions.selectRune(null);
    }
  }

  render() {
    const rune = (this.state.tier === "") ? "" : (
      <RuneSelect
        tier={this.state.tier}
        schematicType={this.props.schematicType}
        onChange={this.handleRuneChange.bind(this)}
      />
    );

    return (
      <div>
        Rune
        <TierSelect
          onChange={this.handleTierChange.bind(this)}
          tiers={["2", "3"]}
        />
        {rune}
      </div>
    );
  }
}

export default RunePanel;
