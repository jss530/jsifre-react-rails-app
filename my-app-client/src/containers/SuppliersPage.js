import React, { Component } from 'react';
import Suppliers from '../components/Suppliers';
import SupplierService from '../services/SupplierService';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';


const SuppliersPage = ({ suppliers }) =>
  <div>
    <Suppliers suppliers={suppliers} />
  </div>;

const mapStateToProps = state => {
  return {
    suppliers: state.suppliers
  };
}

export default connect(mapStateToProps)(SuppliersPage);



// componentDidMount() {
//   SupplierService.fetchSuppliers().then(suppliers => this.setState({ suppliers }))
// }
