import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCNsH4GbArOynEwYbs3oFHR65Z9Ae-HvoQ",
  authDomain: "react-ecommerce-110.firebaseapp.com",
  databaseURL: "https://react-ecommerce-110.firebaseio.com",
  projectId: "react-ecommerce-110",
  storageBucket: "react-ecommerce-110.appspot.com",
  messagingSenderId: "545562949713",
  appId: "1:545562949713:web:e99f1f7b70f032f20d6070",
  measurementId: "G-DGKLK79P7L",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
