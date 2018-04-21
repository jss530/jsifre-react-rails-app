import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSupplierFormData } from '../actions/supplierForm';
import { createSupplier } from '../actions/suppliers';

class SupplierForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentSupplierFormData = Object.assign({}, this.props.supplierFormData, {
      [name]: value
    })
    this.props.updateSupplierFormData(currentSupplierFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createSupplier(this.props.supplierFormData)
  }

  render() {
    const { name, location } = this.props.supplierFormData;

    return (
      <div>
        <h3>Are you a supplier? Are you new to Ugly Delicious? Welcome! Sign up here:</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">Business name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div>
            <label htmlFor="location">Your location:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="location"
              value={location}
            />
          </div>

          <button type="submit">Sign up</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    supplierFormData: state.supplierFormData
  }
}

export default connect(mapStateToProps, {
  updateSupplierFormData,
  createSupplier
})(SupplierForm);
