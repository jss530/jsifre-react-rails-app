import React, { Component } from 'react';
import { connect } from 'react-redux';

import SupplierCard from '../components/SupplierCard';
import { getSuppliers } from '../actions/suppliers';
import './Suppliers.css';


class Suppliers extends Component {

  componentDidMount() {
    this.props.getSuppliers()
  }

  render() {
    return(
      <div className="supplier-border">
        <h1 className="title">Suppliers List</h1>
        <h3>Please select a supplier to see their available inventory.</h3>
        {this.props.suppliers.map(supplier => <SupplierCard key={supplier.id} supplier={supplier} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    suppliers: state.suppliers
  })
}

export default connect(mapStateToProps, { getSuppliers })(Suppliers);
