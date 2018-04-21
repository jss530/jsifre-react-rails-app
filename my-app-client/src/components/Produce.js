import React from 'react';

const Produce = ({ supplier }) => (
  <div key={supplier.produce.id} className="ProduceList">
    <h3>{supplier.produce.name}</h3>
    <p>Quantity: ${supplier.produce.quantity} boxes</p>
    <p>Price: {supplier.produce.price} cents per box</p>
  </div>
)

export default Produce;
