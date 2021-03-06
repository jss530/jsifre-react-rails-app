import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js'



ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
