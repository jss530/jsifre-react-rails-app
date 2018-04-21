import React from 'react';

const Produce = ({ supplier }) => (
  <div id="produce-list">
    {supplier.produce.map(produce =>
        <div key={produce.id}>
          <h3>Name: {produce.name}</h3>
          <p>Quantity: {produce.quantity} boxes</p>
          <p>Price: {produce.price} cents per box</p>
        </div>
        )}

  </div>
)

export default Produce;
