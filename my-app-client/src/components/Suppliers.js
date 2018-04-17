import React from 'react';
import './Suppliers.css';

const Suppliers = ( {suppliers} ) => {
  const renderSuppliers = suppliers.map(supplier =>
    <p>Supplier name</p>
    // <p>Supplier location: {supplier.location}</p>
  )

  return (
    <div>
      {renderSuppliers}
    </div>
  )
}

export default Suppliers;
