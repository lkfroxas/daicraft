import React from 'react';
import Slot from './Slot.js'
import CraftActions from '../../../actions/CraftActions.js';

class SlotPanel extends React.Component {
  getSlots() {
    fetch(`/schematics/${this.props.schematic._id}`)
      .then(res => { return res.json() })
      .then(data => {
        CraftActions.setSchematicData(data);
      });
  }

  componentDidMount() {
    this.getSlots();
  }

  componentDidUpdate(prevProps) {
    if (this.props.schematic._id !== prevProps.schematic._id) {
      this.getSlots();
    }
  }

  render() {
    const slotRows = this.props.schematic.slots.map((slot, index) => {
      return (
        <Slot
          key={index}
          index={index}
          slot={slot}
        />
      );
    })

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Slot</th>
              <th>Tier</th>
              <th>Property</th>
              <th>Material</th>
              <th>Quantity</th>
            </tr>
            {slotRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SlotPanel;
