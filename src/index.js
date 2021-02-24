import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from "react-router-dom";
import App from './App';
import 'normalize.css'
import './styles/styles.scss'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

