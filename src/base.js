import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA54YAfJl3PbTBTtHucygNXFhdn8ANvG-s",
    authDomain: "catch-of-the-day-filipe.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-filipe-default-rtdb.firebaseio.com"
    // projectId: "catch-of-the-day-filipe",
    // storageBucket: "catch-of-the-day-filipe.appspot.com",
    // messagingSenderId: "867889390511",
    // appId: "1:867889390511:web:7f0ea76578472aba41455a",
    // measurementId: "G-FVVFE46GPW"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;