import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import supplierFormData from './reducers/supplierFormData';
import suppliers from './reducers/suppliers';

const reducers = combineReducers({
  suppliers,
  supplierFormData
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
