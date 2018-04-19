import React from 'react';
import { Link } from 'react-router-dom';

const SupplierCard = ({ supplier }) => (
  <div key={supplier.id} className="SupplierCard">
    <Link to={`/suppliers/${supplier.id}`} key={supplier.id} id="supplier-name">{supplier.name}</Link>
    <p>Location: {supplier.location}</p>
  </div>
)

export default SupplierCard;
