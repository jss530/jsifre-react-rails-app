import React, { Component } from 'react';
import SuppliersPage from '../containers/SuppliersPage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/supplierActions'

let suppliers = [
  {name: "ABC", location: "New York", id: 1},
  {name: "EFG", location: "Boston", id: 2}
]

class Suppliers extends Component {

  constructor(props) {
    super(props)

    this.state = {
      suppliers: []
    }
  }

  componentDidMount() {
    this.props.actions.fetchSuppliers().then(suppliers => this.setState({ suppliers }))
  }
  // do console.log of suppliers and see why response isnt rendering, check this one and fetchSuppliers

  render() {
    console.log("Supplier equals", this.props.suppliers)
    return(
      <div>
        <h3>Please select a supplier to see their available inventory.</h3>
        <SuppliersPage suppliers={ suppliers }/>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    suppliers: state.suppliers
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(Suppliers);
