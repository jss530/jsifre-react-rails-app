function produceReducer(state = [], action) {
  switch (action.type) {

    case 'GET_PRODUCE_SUCCESS':
      return action.produces;

    default:
      return state;
  }
}

export default produceReducer;
