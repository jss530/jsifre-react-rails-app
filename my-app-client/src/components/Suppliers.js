import React from 'react';
import { Link } from 'react-router-dom';

const Suppliers = ({ suppliers }) => {
  const renderSuppliers = suppliers.map(supplier =>
      <div>
        <Link to={`/suppliers/${supplier.id}`}>{supplier.name}</Link>
        <p>Supplier location: {supplier.location}</p>
      </div>
  )

  return (
    <div>
      {renderSuppliers}
    </div>
  )
}

export default Suppliers;
