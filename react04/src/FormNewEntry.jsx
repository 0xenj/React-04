import React, { useState } from 'react';

function FormNewEntry(props) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleNewEntry({
      name: name,
      desc: desc,
      price: parseFloat(price),
    });
    setName('');
    setDesc('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Description
        <br />
        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </label>
      <br />
      <label>
        Price
        <br />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default FormNewEntry;