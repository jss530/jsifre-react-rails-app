import React from 'react';
import './Suppliers.css';
import SuppliersList from '../containers/SuppliersList'
import { Link } from 'react-router-dom';

const Suppliers = ( {suppliers} ) => {
  const renderSuppliers = suppliers.map(supplier =>
    <div>
      <p>Supplier name</p>
      <p>Supplier location: {supplier.location}</p>
    </div>
  )

  return (
    <div>
      Suppliers Page
    </div>
  )
}

export default Suppliers;
