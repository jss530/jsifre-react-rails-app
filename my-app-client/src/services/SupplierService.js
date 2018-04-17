const API_URL = process.env.REACT_APP_API_URL;

const SupplierService = {
  fetchSuppliers: () => {
    return fetch(`${API_URL}/suppliers`)
      .then(response => response.json())
  }
}

export default SupplierService;
