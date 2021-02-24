import firebase from 'firebase';

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDUtF0hX8kkQnIbSPCejOOrVemLRrSAtW0",
    authDomain: "practce.firebaseapp.com",
    databaseURL: "https://practce.firebaseio.com",
    projectId: "practce",
    storageBucket: "practce.appspot.com",
    messagingSenderId: "658453135",
    appId: "1:658453135:web:979dc49d921e6d10acf6fa"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();
