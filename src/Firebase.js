import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBmIYVpXnr-VbRDIpLteUxL6UbmwkgnJDE",
    authDomain: "twitter-clone-9e532.firebaseapp.com",
    projectId: "twitter-clone-9e532",
    storageBucket: "twitter-clone-9e532.appspot.com",
    messagingSenderId: "568942791207",
    appId: "1:568942791207:web:97c43d2dde153822dddc02",
    measurementId: "G-8XKD5156RN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()

  export default db;