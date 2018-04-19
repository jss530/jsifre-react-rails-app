export default (state = [], action) => {
  switch(action.type) {
    case 'GET_SUPPLIERS_SUCCESS':
      return action.surfboards;

    default:
      return state;
  }
}
