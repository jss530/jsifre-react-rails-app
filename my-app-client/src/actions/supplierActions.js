import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

export function fetchSuppliers() {
  return function(dispatch) {
    dispatch({type: 'FETCH_SUPPLIERS'})
    return fetch(`${API_URL}/suppliers`)
      .then(returnJSON => {
        return returnJSON.json()
      }).then(responseJSON => {
        dispatch({type: 'FETCH_SUPPLIERS', payload:
        responseJSON})
      });
  }
}
