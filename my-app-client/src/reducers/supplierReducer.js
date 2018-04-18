export default function supplierReducer(state = {suppliers: [] }, action) {
  switch (action.type) {
    case 'FETCH_SUPPLIERS':
      return {
          ...state,
          suppliers: action.payload
      }
    default:
    return state;
  }
};
