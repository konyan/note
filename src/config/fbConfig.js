import firebase from "firebase";

import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA0BanNCAzbN4btOr_d4p9Bl0xs-nzST6A",
  authDomain: "notitest-acd73.firebaseapp.com",
  databaseURL: "https://notitest-acd73.firebaseio.com",
  projectId: "notitest-acd73",
  storageBucket: "notitest-acd73.appspot.com",
  messagingSenderId: "447471536257",
  appId: "1:447471536257:web:e69c7becc7e63348"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
