import React from 'react';
import SelectOption from './SelectOption.js';
import { FormControl } from 'react-bootstrap';
import { isEqual } from 'lodash';

class GenericSelect extends React.Component {
  state = { selectedValue: "" }

  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(this.props.options, prevProps.options)) {
      this.setState({ selectedValue: "" });
    }
  }

  handleSelectedValueChanged(event) {
    this.setState({ selectedValue: event.target.value });
    this.props.onChange(event);
  }

  render() {
    const options = this.props.options.map(option => {
      return (
        <SelectOption
          key={option.value}
          value={option.value}
          name={option.name}
        />
      );
    });

    return (
      <FormControl
        onChange={this.handleSelectedValueChanged.bind(this)}
        componentClass="select"
        value={this.state.selectedValue}>
        <option value="">{this.props.name}</option>
        {options}
      </FormControl>
    );
  }
}

export default GenericSelect;
