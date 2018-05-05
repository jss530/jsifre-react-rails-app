import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likeSupplier } from '../actions/suppliers';

class SupplierCard extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      likes: 0
    }
  }

  render() {
    const {supplier} = this.props;

    return (
      <div key={supplier.id} id="supplier-card">
        <Link to={`/suppliers/${supplier.id}/produce`} key={supplier.id}>{supplier.name}</Link>
        <p><strong>Location:</strong> {supplier.location}</p>
        <button onClick={this.state.likeSupplier()}>Like this</button> {this.state.likes}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  supplier: state.supplier,
});


export default connect(mapStateToProps, {likeSupplier})(SupplierCard);
