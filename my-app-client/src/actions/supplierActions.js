import {supplierAdapter} from '../adapters/supplierAdapter';

export const fetchSuppliers = () => {
  const response = supplierAdapter.fetchSuppliers()

  return {
    type: 'FETCH_SUPPLIERS'
    payload: response
  }
}
