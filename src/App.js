import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import SignInAndSignUpPage from './components/SignInAndSignUpPage';
import { auth,createUserProfileDocument } from './firebase/firebase';

class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(() => ({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }));
        })
      }
      this.setState(() => ({ currentUser: userAuth}))
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    const { currentUser } = this.state;
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

  
  
}

export default App;
