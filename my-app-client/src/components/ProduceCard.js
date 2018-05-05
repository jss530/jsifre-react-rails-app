import React from 'react';

const ProduceCard = ({ produce }) => {
  return (
      <div key={produce.id} className="produce-card">
        <div className="dropdown">
          <button className="produce-name">{produce.name}</button>
          <div className="dropdown-content">
            <p>Availability: {produce.quantity} pounds</p>
            <p>Price: {produce.price} cents per pound</p>
          </div>
        </div>
      </div>
  );
}

export default ProduceCard;
