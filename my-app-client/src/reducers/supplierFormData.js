const initialState = {
  name: '',
  location: '',
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.supplierFormData;

    case 'RESET_SUPPLIER_FORM':
      return initialState;

    default:
      return state;
  }
}
