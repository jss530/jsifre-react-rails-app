import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

const setSuppliers = suppliers => {
  return {
    type: 'GET_SUPPLIERS_SUCCESS',
    suppliers
  }
}

export const fetchSuppliers = () => {
  return dispatch => {
    return fetch(`${API_URL}/suppliers`)
      .then(response => response.json())
      .then(suppliers => dispatch(setSuppliers(suppliers)))
      .catch(error => console.log(error));
  }
}
