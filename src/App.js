import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './selectors/user';
import { setCurrentUser } from './redux/actions/user';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './components/ShopPage';
import CheckoutPage from './pages/Checkout';
import SignInAndSignUpPage from './components/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from './firebase/firebase';
import './App.css';

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }, [setCurrentUser]);

  // componentWillUnmount(){
  //   this.unsubscribeFromAuth();
  // }

    return (
      <div>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
      </Switch>
      </div>
    );

  
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
