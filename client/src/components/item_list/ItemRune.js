import React from 'react';
import { Panel } from 'react-bootstrap';

function ItemRune(props) {
  return (
    <Panel>
      <Panel.Heading>
        Rune
      </Panel.Heading>
      <Panel.Body>
        {props.name}
      </Panel.Body>
    </Panel>
  );
}

export default ItemRune;
