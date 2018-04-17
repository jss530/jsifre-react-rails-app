import React, { Component } from 'react';
import Suppliers from '../components/Suppliers';
import SupplierService from '../services/SupplierService';
import SuppliersShow from './SuppliersShow';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchSuppliers } from '../actions/supplierActions';


class SuppliersPage extends Component {
    <div>
      <Suppliers suppliers={suppliers} />
      <Route path={`${match.url}/:supplierId`} component={SupplierShow}/>
      <Route exact path={match.url} render={() => (
      <h3>Please select a supplier to see their available inventory.</h3>
       )}/>
    </div>;

  const mapStateToProps = state => {
    return {
      suppliers: state.suppliers
    };
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSuppliers: fetchSuppliers
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SuppliersPage);



// componentDidMount() {
//   SupplierService.fetchSuppliers().then(suppliers => this.setState({ suppliers }))
// }

// // --need to refactor (add actions/reducers) -- i.e redux
// ---need middleware
