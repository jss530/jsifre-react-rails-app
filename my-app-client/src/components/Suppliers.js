import React from 'react';
import { Link } from 'react-router-dom';

const Suppliers = ({ suppliers }) => {
  const renderSuppliers = suppliers.map(supplier =>
      <p key={supplier.id}>Supplier name: {supplier.name}</p>
      <p>Supplier location: {supplier.location}</p>
  )

  return (
    <div>
      {renderSuppliers}
    </div>
  )
}

export default Suppliers;
