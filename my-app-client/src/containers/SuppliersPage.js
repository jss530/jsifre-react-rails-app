import React from 'react'
import { Link } from 'react-router-dom';

const SuppliersPage = (props) => {
  function renderSuppliers() {
    return props.suppliers.map(supplier => {
      return (
        <div>
          <Link to={`/suppliers/${supplier.id}`}>{supplier.name}</Link>
          <p>Supplier location: {supplier.location}</p>
        </div>
      )
    })
  }
  return (
    <div>
      {renderSuppliers()}
    </div>
  )
}

export default SuppliersPage;
