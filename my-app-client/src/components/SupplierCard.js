import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likeSupplier } from '../actions/suppliers';

class SupplierCard extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {supplier} = this.props;

    return (
      <div key={supplier.id} id="supplier-card">
        <Link to={`/suppliers/${supplier.id}/produce`} key={supplier.id}>{supplier.name}</Link>
        <p><strong>Location:</strong> {supplier.location}</p>
        <button onClick={() => likeSupplier(supplier.id)} >Like this</button> {supplier.likes}
      </div>
    )
  }
}

export default SupplierCard;
