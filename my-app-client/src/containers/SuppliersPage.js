import React from 'react'
import { Link } from 'react-router-dom';

const SuppliersPage = ({ suppliers }) => {
  function renderSuppliers(suppliers) {
    return suppliers && suppliers.map(supplier => {
      return (
        <div>
          <Link to={`/suppliers/${supplier.id}`} key={supplier.id}>{supplier.name}</Link>
          <p>Supplier location: {supplier.location}</p>
        </div>
      )
    })
  }
  return (
    <div>
      {renderSuppliers(suppliers)}
    </div>
  )
}

export default SuppliersPage;
