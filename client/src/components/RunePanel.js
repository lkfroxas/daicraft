import React from 'react';
import SelectOption from './shared/SelectOption.js';
import Select from './shared/Select.js';
import CraftActions from '../actions/CraftActions.js';

function RuneTierSelect(props) {
  const tiers = ["2", "3"].map((tier, index) => {
    return (
      <SelectOption
        key={index}
        value={tier}
        name={tier}
      />
    );
  });

  return (
    <Select
      onChange={props.onChange}
      blankOptionName="Tier"
      options={tiers}
    />
  );
}

class RuneSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runes: []
    }
  }

  getRunes() {
    fetch(`/runes?tier=${this.props.tier}&schematicType=${this.props.schematicType}`)
      .then(res => { return res.json() })
      .then(data => { this.setState({ runes: data }) });
  }

  componentDidMount() {
    this.getRunes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.tier !== prevProps.tier) {
      this.getRunes();
    }
  }

  render() {
    const options = this.state.runes.map(rune => {
      return (
        <SelectOption
          key={rune._id}
          value={rune._id}
          name={rune.name}
        />
      );
    });

    return (
      <Select
        onChange={this.props.onChange}
        blankOptionName="Rune"
        options={options}
      />
    );
  }
}

class RunePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tier: ""
    };
  }

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
        <RuneTierSelect onChange={this.handleTierChange.bind(this)} />
        {rune}
      </div>
    );
  }
}

export default RunePanel;
