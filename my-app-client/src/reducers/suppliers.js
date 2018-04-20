export default (state = [], action) => {
  switch(action.type) {
    case 'GET_SUPPLIERS_SUCCESS':
      return action.suppliers;

    case 'CREATE_SUPPLIER_SUCCESS':
      return state.concat(action.supplier);

    default:
      return state;
  }
}
