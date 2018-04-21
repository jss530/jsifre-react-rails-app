import React from 'react';
import { connect } from 'react-redux';
import './SuppliersShow.css';

const SuppliersShow = ({ supplier }) => {

  return (
    <div className="show-supplier">
      <div className="hero-image">
        <div className="hero-text">
          <h1>{supplier.name}</h1>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const supplier = state.suppliers.find(supplier => supplier.id === +ownProps.match.params.supplierId)

  if (supplier) {
    return { supplier }
  } else {
    return { supplier: {} }
  }
}

export default connect(mapStateToProps)(SuppliersShow);
