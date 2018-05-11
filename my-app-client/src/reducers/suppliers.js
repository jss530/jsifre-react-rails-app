function suppliersReducer (state = [], action) {

  switch(action.type) {
    case 'GET_SUPPLIERS_SUCCESS':
      return action.suppliers;

    case 'CREATE_SUPPLIER_SUCCESS':
      return state.concat(action.supplier);

    case 'LIKE_SUPPLIER':
      return state.map(supplier => supplier.id === action.supplierId ? Object.assign({}, supplier, { likes: supplier.likes + 1 }) : supplier)

    default:
      return state;
  }
}

export default suppliersReducer;
