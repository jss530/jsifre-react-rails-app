import React from 'react';
import { Link } from 'react-router-dom';


const SupplierCard = ({ supplier, addLike }) =>
      <div key={supplier.id} id="supplier-card">
        <Link to={`/suppliers/${supplier.id}/produce`} key={supplier.id}>{supplier.name}</Link>
        <p><strong>Location:</strong> {supplier.location}</p>
        <button onClick={() => addLike(supplier)} >Like this</button>
        <p>Likes: {supplier.likes} </p>
      </div>


export default SupplierCard;
