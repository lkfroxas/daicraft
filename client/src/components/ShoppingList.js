import React from 'react';
import CraftActions from '../actions/CraftActions.js';

function ShoppingList(props) {
  const listArray = Object.entries(props.shoppingList);
  const materialsList = listArray.map(entry => {
    return (!entry[0]) ? "" : (
      <tr>
        <td>{entry[0]}</td>
        <td>{entry[1]}</td>
      </tr>
    );
  });

  return (
    <section>
      <h3>Shopping List</h3>
      <table>
        <tbody>
          <tr>
            <th>Material</th>
            <th>Quantity</th>
          </tr>
          {materialsList}
        </tbody>
      </table>
    </section>
  );
}

export default ShoppingList;
