const API_URL = process.env.REACT_APP_API_URL;

// export const fetchSuppliers = () => {
//   const response = supplierAdapter.fetchSuppliers()
//
//   return {
//     type: 'FETCH_SUPPLIERS'
//     payload: response
//   }
// }

export function fetchSuppliers() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_SUPPLIERS' });
    return fetch(`${API_URL}/suppliers`)
      .then(response => response.json());
  };
}

// That returned function receives the store's dispatch function, and with that we are able to 
// dispatch multiple actions:
// one to place the state in a loading state, and another to update our store with the returned data.
