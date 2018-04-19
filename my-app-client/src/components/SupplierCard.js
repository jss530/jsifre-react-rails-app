import React from 'react';
import { Link } from 'react-router-dom';

const SupplierCard = ({ supplier }) => (
  <div key={supplier.id} className="SupplierCard">
    <Link to={`/suppliers/${supplier.id}`} key={supplier.id}>{supplier.name}</Link>
    <p>Supplier location: {supplier.location}</p>
  </div>
)

export default SupplierCard;
