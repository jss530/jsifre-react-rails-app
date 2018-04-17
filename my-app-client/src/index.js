import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import supplierReducer from './reducers/supplierReducer'

const store = createStore(supplierReducer, applyMiddleware(thunk));

// render (
//   <Provider store={store} >
//     <App />,
//   </Provider>, document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
