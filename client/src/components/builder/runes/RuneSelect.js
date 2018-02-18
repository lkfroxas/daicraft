import React from 'react';
import GenericSelect from '../../shared/GenericSelect.js';

class RuneSelect extends React.Component {
  state = { runes: [] };

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
    const options = this.state.runes.map(rune => ({
      value: rune._id,
      name: rune.name
    }));

    return (
      <GenericSelect
        onChange={this.props.onChange}
        name="Rune"
        options={options}
      />
    );
  }
}

export default RuneSelect;
