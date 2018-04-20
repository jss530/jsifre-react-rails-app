import React from 'react';
import { Link } from 'react-router-dom';

const SupplierCard = ({ supplier }) => (
  <div key={supplier.id} id="supplier-card">
    <Link to={`/suppliers/${supplier.id}`} key={supplier.id}>{supplier.name}</Link>
    <p><strong>Location:</strong> {supplier.location}</p>
  </div>
)

export default SupplierCard;
