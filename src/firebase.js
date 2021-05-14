import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeEvsQOOEVSq8PiZwIgHvzZfen0hh-3ng",
    authDomain: "clone-a564d.firebaseapp.com",
    projectId: "clone-a564d",
    storageBucket: "clone-a564d.appspot.com",
    messagingSenderId: "646377412595",
    appId: "1:646377412595:web:3b36e2b8a13384e0aee486",
    measurementId: "G-ZVZY04HQN3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};