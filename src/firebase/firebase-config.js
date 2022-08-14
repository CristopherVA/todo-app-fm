// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from  "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATTMsp_NLPYWvvcBXN7NaSnOC4b5WHn5w",
  authDomain: "todo-app-fm.firebaseapp.com",
  projectId: "todo-app-fm",
  storageBucket: "todo-app-fm.appspot.com",
  messagingSenderId: "470654244819",
  appId: "1:470654244819:web:72d966b8c0b4f1d117c126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const providerGoogle = new GoogleAuthProvider();
const providerFacebook =  new FacebookAuthProvider();

export {
  db,
  auth,
  providerGoogle,
  providerFacebook
}