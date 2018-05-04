import React from 'react';

const ProduceCard = ({ produce }) => {
  return (
      <div key={produce.id} className="produce-card">
        <p>{produce.name}</p>
      </div>
  );
}

export default ProduceCard;
