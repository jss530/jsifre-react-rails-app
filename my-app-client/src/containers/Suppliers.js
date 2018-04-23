import React, { Component } from 'react';
import { connect } from 'react-redux';

import SupplierCard from '../components/SupplierCard';
import ProduceCard from '../components/ProduceCard';
import SuppliersShow from './SuppliersShow';
import SupplierForm from './SupplierForm';
import { getSuppliers } from '../actions/suppliers';
import './Suppliers.css';

class Suppliers extends Component {

  componentDidMount() {
    this.props.getSuppliers()
  }

  render() {
    const { match, suppliers } = this.props;
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
              <h3 className="supplier-instructions">Click on a supplier to see their available inventory.</h3>
                {this.props.suppliers.map(supplier => <SupplierCard key={supplier.id} supplier={supplier} />)}
            </div>
            <div className="show-supplier" id="show-supplier">
              {this.props.children}
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
