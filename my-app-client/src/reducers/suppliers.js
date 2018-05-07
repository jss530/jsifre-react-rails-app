function suppliersReducer (state = [], action) {

  switch(action.type) {
    case 'GET_SUPPLIERS_SUCCESS':
      return action.suppliers;

    case 'CREATE_SUPPLIER_SUCCESS':
      return state.concat(action.supplier);

    case 'LIKE_SUPPLIER':
      let supplier = state.find(supplier => supplier.id === action.supplierId);
      Object.assign({}, supplier, { likes: supplier.likes += 1 })
      debugger;
      return state;

    default:
      return state;
  }
}

export default suppliersReducer;
