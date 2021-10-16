import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATTMsp_NLPYWvvcBXN7NaSnOC4b5WHn5w",
  authDomain: "todo-app-fm.firebaseapp.com",
  projectId: "todo-app-fm",
  storageBucket: "todo-app-fm.appspot.com",
  messagingSenderId: "470654244819",
  appId: "1:470654244819:web:72d966b8c0b4f1d117c126"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export {
    firebase,
    db,
    googleProvider,
    facebookProvider
}