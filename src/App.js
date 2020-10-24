import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route path='/' component={HomePage} exact />
      <Route path='/shop' component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
