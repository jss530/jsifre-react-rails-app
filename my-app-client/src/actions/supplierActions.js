const API_URL = process.env.REACT_APP_API_URL;

export const fetchSuppliers = () => {
  const response = supplierAdapter.fetchSuppliers()

  return {
    type: 'FETCH_SUPPLIERS',
    payload: response
  }
}
