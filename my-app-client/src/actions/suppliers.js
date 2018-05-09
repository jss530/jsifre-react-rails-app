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
    supplier: Object.assign({}, supplier, { likes: 0 })
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

const setProduce = produces => {
  return {
    type: 'GET_PRODUCE_SUCCESS',
    produces
  }
}

export const getProduce = supplierId => {
  return dispatch => {
    return fetch(`${API_URL}/suppliers/${supplierId}/produce`)
      .then(response => response.json())
      .then(produces => dispatch(setProduce(produces)))
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

const likeSupplier = supplierId => {
  return {
    type: 'LIKE_SUPPLIER',
    supplierId
  }
}

export const addLike = supplier => {
   return dispatch => {
     return fetch(`${API_URL}/suppliers`, {
       method: "PATCH",
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({ supplier: supplier })
     })
       .then(response => response.json())
       .then(supplier => {
         dispatch(likeSupplier(supplier.id))
       })
       .catch(error => console.log(error))
   }
 }
