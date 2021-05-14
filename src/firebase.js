import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2cv3J5JqyRoefxA_wIinAVoCsa3G4S3s",
    authDomain: "clone-dd9c5.firebaseapp.com",
    projectId: "clone-dd9c5",
    storageBucket: "clone-dd9c5.appspot.com",
    messagingSenderId: "689531989439",
    appId: "1:689531989439:web:d680578d378ec0c478c50a",
    measurementId: "G-ZFF019B6GV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };