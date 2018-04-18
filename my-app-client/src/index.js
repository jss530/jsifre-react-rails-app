import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { WrapperApp } from './App'
import {browserHistory} from 'react-router';
import {compose} from 'redux'
import rootReducer from './reducers'
import supplierReducer from './reducers/supplierReducer'
import Suppliers from './components/Suppliers'
import SuppliersPage from './containers/SuppliersPage'
import SupplierShow from './containers/SuppliersShow'


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
    )
)

ReactDOM.render(
  <Provider store={store}>
    <WrapperApp/>
  </Provider>,
    document.getElementById('root')
)
