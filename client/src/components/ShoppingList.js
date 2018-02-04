import React from 'react';

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
