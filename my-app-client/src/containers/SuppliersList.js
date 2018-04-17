import React from 'react';
import Suppliers from '../components/Suppliers';
import SupplierService from '../services/SupplierService';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';


class SuppliersList extends React.Component {

  constructor() {
    super()

    this.state = {
      suppliers: []
    }
  }

  componentDidMount() {
    SupplierService.fetchSuppliers().then(suppliers => this.setState({ suppliers }))
  }

  render() {
    console.log("Suppliers equals", this.state.suppliers)
    return (
      <div>Suppliers Page</div>
    )
  }
};

const mapStateToProps = state => {
  return {
    suppliers: state.suppliers
  };
}

export default connect(mapStateToProps, SupplierService)(SuppliersList);
