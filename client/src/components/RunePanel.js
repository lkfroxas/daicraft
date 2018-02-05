import React from 'react';
import BuilderOption from './BuilderOption.js';
import CraftActions from '../actions/CraftActions.js';

function RuneTierSelect(props) {
  return (
    <select onChange={props.onChange}>
      <option value="">Tier</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
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
        <BuilderOption
          key={rune._id}
          value={rune._id}
          name={rune.name}
        />
      );
    });

    return (
      <select onChange={this.props.onChange}>
        <option value="">Rune</option>
        {options}
      </select>
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
