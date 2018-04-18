import React, { Component } from 'react';
import SuppliersPage from '../containers/SuppliersPage';
import supplierActions from '../actions/supplierActions';
import SuppliersShow from '../containers/SuppliersShow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import * as actions from '../actions/supplierActions'

let suppliers = [
  {name: "ABC", location: "New York", id: 1},
  {name: "EFG", location: "Boston", id: 2}
]

export default class Suppliers extends Component {

  constructor() {
    super()

    this.state = {
      suppliers: []
    }
  }

  componentDidMount() {
    this.props.fetchSuppliers().then(suppliers => this.setState({ suppliers }))
  }

  render() {
    return(
      <div>
        <SuppliersPage suppliers={suppliers}/>
        <h3>Please select a supplier to see their available inventory.</h3>
      </div>
    )}
  }

  function mapStateToProps(state) {
    return {
      suppliers: state.suppliers
    };
  }

  function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}


connect(mapStateToProps, mapDispatchToProps)(Suppliers);
