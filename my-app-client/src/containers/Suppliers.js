import React, { Component } from 'react';
import { connect } from 'react-redux';
import SuppliersPage from './SuppliersPage';
import { fetchSuppliers } from '../actions/suppliers'
import './Surfboards.css';


class Suppliers extends Component {

  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     suppliers: []
  //   }
  // }

  componentDidMount() {
    this.props.fetchSuppliers()
    // .then(suppliers => this.setState({ suppliers }))
  }
  // do console.log of suppliers and see why response isnt rendering, check this one and fetchSuppliers

  render() {
    return(
      <div>
        <h1>Suppliers</h1>
        <h3>Please select a supplier to see their available inventory.</h3>
        {this.props.suppliers.map(supplier => <SupplierCard key={supplier.id} supplier={supplier} />)}
        <SuppliersPage/>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    suppliers: state.suppliers
  };
}

// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }


export default connect(mapStateToProps, { fetchSuppliers })(Suppliers);
