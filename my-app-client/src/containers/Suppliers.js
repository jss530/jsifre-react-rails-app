import React, { Component } from 'react';
import { connect } from 'react-redux';

import SupplierCard from '../components/SupplierCard';
import { getSuppliers } from '../actions/suppliers'
import './Suppliers.css';


class Suppliers extends Component {

  componentDidMount() {
    this.props.getSuppliers()
    // .then(suppliers => this.setState({ suppliers }))
  }
  // do console.log of suppliers and see why response isnt rendering, check this one and fetchSuppliers

  render() {
    return(
      <div>
        <h1>Suppliers</h1>
        <h3>Please select a supplier to see their available inventory.</h3>
        {this.props.suppliers.map(supplier => <SupplierCard key={supplier.id} supplier={supplier} />)}
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return ({
    suppliers: state.suppliers
  })
}

// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }


export default connect(mapStateToProps, { getSuppliers })(Suppliers);
