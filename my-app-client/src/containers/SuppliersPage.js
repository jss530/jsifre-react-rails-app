import React, { Component } from 'react';
import Suppliers from '../components/Suppliers';
import supplierActions from '../actions/supplierActions';
import SuppliersShow from './SuppliersShow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import * as actions from '../actions/supplierActions'


export class SuppliersPage extends Component {

  componentDidMount() {
    this.props.fetchSuppliers().then(suppliers => this.setState({ suppliers }))
  }

  render() {
    return(
      <div>
        <Suppliers/>
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


export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(SuppliersPage);
