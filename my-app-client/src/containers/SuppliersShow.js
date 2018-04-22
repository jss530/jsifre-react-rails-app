import React from 'react';
import { connect } from 'react-redux';
import './SuppliersShow.css';

const SuppliersShow = ({ supplier }) =>
  <div className="show-supplier">
    <div className="hero-image">
      <div className="hero-text">
        <h2>{supplier.name}</h2>
        <p>{supplier.location}</p>
      </div>
    </div>
      <p className="show-supplier-intro">Here's what's available:</p>
  </div>;


const mapStateToProps = (state, ownProps) => {
  const supplier = state.suppliers.find(supplier => supplier.id === +ownProps.match.params.supplierId)

  if (supplier) {
    return { supplier }
  } else {
    return { supplier: {} }
  }
}

export default connect(mapStateToProps)(SuppliersShow);
