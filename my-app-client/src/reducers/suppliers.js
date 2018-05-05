function suppliersReducer (state = [], action) {
  let supplier;
  let index;

  switch(action.type) {
    case 'GET_SUPPLIERS_SUCCESS':
      return action.suppliers;

    case 'CREATE_SUPPLIER_SUCCESS':
      return state.concat(action.supplier);

    case 'LIKE_SUPPLIER':
      index = state.findIndex(supplier => supplier.id === action.supplierId);
      supplier = state[index];

      if (supplier.likes >= 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, supplier, { likes: supplier.likes += 1 }),
          ...state.slice(index + 1)
        ];
      }

    default:
      return state;
  }
}

export default suppliersReducer;
