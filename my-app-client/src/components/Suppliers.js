import React from 'react';
import './Suppliers.css';
import SuppliersList from '../containers/SuppliersList'

const Suppliers = ( {suppliers} ) => {
  const renderSuppliers = suppliers.map(supplier =>
    <p>Supplier name</p>
    <p>Supplier location: {supplier.location}</p>
  )

  return (
    <div>
      Suppliers Page
    </div>
  )
}

export default Suppliers;
