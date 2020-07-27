import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBwBztdhTZt0ZbMruI5uA6K7mWEFMK0G8A",
  authDomain: "fb-messenger-clone-8a242.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-8a242.firebaseio.com",
  projectId: "fb-messenger-clone-8a242",
  storageBucket: "fb-messenger-clone-8a242.appspot.com",
  messagingSenderId: "834607950354",
  appId: "1:834607950354:web:611559f18e433bfe5506cb",
  measurementId: "G-HXPZEWF0RV"
});

const db = firebaseApp.firestore();

export default db;