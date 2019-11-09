import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDqWw5gcvbJUgw1TG6YlS9P5oLj-q0J2gs",
  authDomain: "crwn-db-92010.firebaseapp.com",
  databaseURL: "https://crwn-db-92010.firebaseio.com",
  projectId: "crwn-db-92010",
  storageBucket: "crwn-db-92010.appspot.com",
  messagingSenderId: "753846286405",
  appId: "1:753846286405:web:c713a1a5fb45009e600b2c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('Error creating user', error);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
