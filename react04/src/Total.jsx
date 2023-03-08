import React from 'react';

function Total(props) {
  const { total } = props;
  return (
    <div>
      <h2>Total: {total}</h2>
    </div>
  );
};

export default Total;