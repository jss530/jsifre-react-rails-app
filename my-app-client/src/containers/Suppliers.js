import React, { Component } from 'react';
import { connect } from 'react-redux';

import SupplierCard from '../components/SupplierCard';
import SupplierForm from './SupplierForm';
import { getSuppliers } from '../actions/suppliers';
import './Suppliers.css';

class Suppliers extends Component {

  componentDidMount() {
    this.props.getSuppliers()
  }

  render() {
    return(
      <div className="supplier-page">
          <div className="hero-image">
            <div className="hero-text">
              <h1>Suppliers List</h1>
            </div>
          </div>
            <div className="supplier-form">
              <SupplierForm />
            </div>
            <div className="supplier-section">
              <h3 className="supplier-instructions" id="col-2">Click on a supplier to see their available inventory.</h3>
                {this.props.suppliers.map(supplier => <SupplierCard key={supplier.id} supplier={supplier} />)}
            </div>
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
