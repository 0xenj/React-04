import React from 'react'

function Table(props) {
  const { entries, handleDelete } = props;
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
            <button class="btn-close" aria-label="Close" onClick={() => handleDelete(entry.id)}>DELETE</button>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
