import React from 'react';
import TierSelect from '../../shared/TierSelect.js';
import RuneSelect from './RuneSelect.js';
import CraftActions from '../../../actions/CraftActions.js';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

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
      <Panel>
        <Panel.Heading>
          Select Rune
        </Panel.Heading>
        <Panel.Body>
          <Grid fluid>
            <Row>
              <Col lg={2}>
                <TierSelect
                  onChange={this.handleTierChange.bind(this)}
                  tiers={["2", "3"]}
                />
              </Col>
              <Col lg={10}>
                {rune}
              </Col>
            </Row>
          </Grid>
        </Panel.Body>
      </Panel>
    );
  }
}

export default RunePanel;
