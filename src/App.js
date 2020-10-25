import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import SignInAndSignUpPage from './components/SignInAndSignUpPage';
import { auth } from './firebase/firebase';

function App() {
  const [currentUser, setCurrentUser ] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user)
    });
    
    return unsubscribe;
  });
  return (
    <div>
    <Header currentUser={currentUser} />
    <Switch>
      <Route path='/' component={HomePage} exact />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
    </Switch>
    </div>
  );
}

export default App;
