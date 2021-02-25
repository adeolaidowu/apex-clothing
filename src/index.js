import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store/store';
import App from './App';
import 'normalize.css'
import './styles/styles.scss'


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

