import { combineReducers } from 'redux';
import suppliersReducer from './suppliers'
import produceReducer from './produce'

const rootReducer = combineReducers({
  suppliers: suppliersReducer,
  produces: produceReducer
});

export default rootReducer;
