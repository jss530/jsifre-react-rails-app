function suppliersReducer (state = [], action) {
  let supplier;

  switch(action.type) {
    case 'GET_SUPPLIERS_SUCCESS':
      return action.suppliers;

    case 'CREATE_SUPPLIER_SUCCESS':
      return state.concat(action.supplier);

    case 'LIKE_SUPPLIER':
      suppliers: state.suppliers.map( (supplier) => {

        if (supplier.id === action.supplierId) {
           return supplier.likes += 1
        }

        return supplier;
      });

    default:
      return state;
  }
}

export default suppliersReducer;
