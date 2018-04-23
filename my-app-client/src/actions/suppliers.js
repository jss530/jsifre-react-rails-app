import { resetSupplierForm } from './supplierForm';

const API_URL = process.env.REACT_APP_API_URL;

const setSuppliers = suppliers => {
  return {
    type: 'GET_SUPPLIERS_SUCCESS',
    suppliers
  }
}

const addSupplier = supplier => {
  return {
    type: 'CREATE_SUPPLIER_SUCCESS',
    supplier
  }
}

const setProduce = produce => {
  return {
    type: 'GET_PRODUCE_SUCCESS',
    produce
  }
}

export const getSuppliers = () => {
  return dispatch => {
    return fetch(`${API_URL}/suppliers`)
      .then(response => response.json())
      .then(suppliers => dispatch(setSuppliers(suppliers)))
      .catch(error => console.log(error));
  }
}

export const createSupplier = supplier => {
  return dispatch => {
    return fetch(`${API_URL}/suppliers`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ supplier: supplier })
    })
      .then(response => response.json())
      .then(supplier => {
        dispatch(addSupplier(supplier))
        dispatch(resetSupplierForm())
      })
      .catch(error => console.log(error))
  }
}

export const getProduce = (supplier) => {
  return dispatch => {
    return fetch(`${API_URL}/suppliers/${supplier.id}/produce`)
      .then(response => response.json())
      .then(produce => dispatch(setProduce(produce)))
      .catch(error => console.log(error));
  }
}
