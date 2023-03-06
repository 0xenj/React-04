import React from 'react'

function Table(props) {
  const { entries } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.name}</td>
            <td>{entry.desc}</td>
            <td>{entry.price}</td>
            <button type="button" class="btn-close" aria-label="Close"></button>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
