import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './selectors/user';
import { setCurrentUser } from './redux/actions/user';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './components/ShopPage';
import CheckoutPage from './pages/Checkout';
import SignInAndSignUpPage from './components/SignInAndSignUpPage';
import { auth,createUserProfileDocument } from './firebase/firebase';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
          )
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
      </Switch>
      </div>
    );
  }

  
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
