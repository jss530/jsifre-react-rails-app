import { combineReducers } from 'redux';
import supplierReducer from './supplierReducer'

const rootReducer = combineReducers({
  suppliers: supplierReducer
})
