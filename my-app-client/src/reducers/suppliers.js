export default (state = [], action) => {
  switch(action.type) {
    case 'GET_SUPPLIERS_SUCCESS':
      return action.suppliers;

    case 'CREATE_SUPPLIER_SUCCESS':
      //return [...state, action.supplier]
      return state.concat(action.supplier);

    case 'GET_PRODUCE_SUCCESS':
      return action.produce;  

    default:
      return state;
  }
}
