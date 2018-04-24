import React from 'react';
import { connect } from 'react-redux';
import ProduceCard from '../components/ProduceCard';
import './SuppliersShow.css';
import { Link } from 'react-router-dom';

const SuppliersShow = ({ supplier }) =>
  <div className="show-supplier">
    <div className="hero-image">
      <div className="hero-text">
        <h2>{supplier.name}</h2>
        <p>{supplier.location}</p>
      </div>
    </div>
      <Link to={`/suppliers/${supplier.id}/produce`}>Here's what's available:</Link>
      <ProduceCard />
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
