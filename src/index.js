import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

import store from './store'
import App from './containers/App.js'
import './style.css';

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  
, document.getElementById('root'));
registerServiceWorker();
