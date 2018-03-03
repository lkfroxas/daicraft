import React from 'react';
import { Panel, Table } from 'react-bootstrap';

function ShoppingList(props) {
  const listArray = Object.entries(props.shoppingList);
  const materialsList = listArray.map((entry, index) => {
    return (!entry[0]) ? "" : (
      <tr key={index}>
        <td>{entry[0]}</td>
        <td>{entry[1]}</td>
      </tr>
    );
  });

  return (
    <section>
      <Panel defaultExpanded>
        <Panel.Heading>
          <Panel.Title toggle>
            <h3>Shopping List</h3>
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            <Table>
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {materialsList}
              </tbody>
            </Table>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    </section>
  );
}

export default ShoppingList;
