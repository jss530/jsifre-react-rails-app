import React from 'react';
import { connect } from 'react-redux';

const SuppliersShow = ({ supplier }) =>
  <div>
    <h2>{supplier.name}</h2>
    <p>{supplier.location}</p>
  </div>

const mapStateToProps = (state, ownProps) => {
  const supplier = state.suppliers.find(supplier => supplier.id === ownProps.match.params.supplierId)

  if (supplier) {
    return { supplier }
  } else {
    return { supplier: {} }
  }
}

export default connect(mapStateToProps)(SuppliersShow);
