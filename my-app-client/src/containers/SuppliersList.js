import React from 'react';
import Suppliers from './components/Suppliers'
import SupplierService from './services/SupplierService'


class SuppliersList extends Component {

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
    return (
      <div>Pets Page</div>
    )
  }
};

const mapStateToProps = state => {
  return {
    suppliers: state.supplier
  };
}

export default SuppliersList
