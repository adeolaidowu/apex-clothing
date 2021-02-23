import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let config = {
    apiKey: "AIzaSyCn3JAgF0FgJLzDn1Z6iJmgIT9VO9xMif0",
    authDomain: "apex-clothing.firebaseapp.com",
    databaseURL: "https://apex-clothing.firebaseio.com",
    projectId: "apex-clothing",
    storageBucket: "apex-clothing.appspot.com",
    messagingSenderId: "792499870098",
    appId: "1:792499870098:web:74dfcc7d2e6553c737094b"
  };

  firebase.initializeApp(config);

  const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
   if(!snapShot.exists){
     const { displayName, email } = userAuth;
     const createdAt = new Date();
     try {
       userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
        })
     } catch (error) {
       console.log("error creating user", error.message);
     }
   }
   return userRef;
  }

  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

  export { auth, firestore, signInWithGoogle, createUserProfileDocument, firebase as default };