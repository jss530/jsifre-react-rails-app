import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

// import surfboards from './reducers/surfboards'; (form will go here)
import suppliers from './reducers/suppliers';

const reducers = combineReducers({
  // surfboards (form will go here),
  suppliers
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
