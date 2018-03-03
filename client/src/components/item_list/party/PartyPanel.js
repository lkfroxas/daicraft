import React from 'react';
import GearNameList from './GearNameList.js';
import PartySelect from './PartySelect.js';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

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
      <Panel>
        <Panel.Heading>
          Party Member
        </Panel.Heading>
        <Panel.Body>
          <Grid fluid>
            <Row>
              <Col lg={6}>
                <PartySelect
                  type={this.props.type}
                  onChange={this.handlePartyMemberChange.bind(this)}
                />
              </Col>
              <Col lg={6}>
                {gearNames}
              </Col>
            </Row>
          </Grid>
        </Panel.Body>
      </Panel>
    );
  }
}

export default PartyPanel;
