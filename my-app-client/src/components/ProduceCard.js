import React from 'react';

const ProduceCard = ({ produce }) => {
  return (
      <div key={produce.id} className="produce-card">
        <p>{produce.name}</p>
        <p>Availability: {produce.quantity} pounds</p>
        <p>Price: {produce.price} cents per pound</p>
        <br/>
      </div>
  );
}

export default ProduceCard;
