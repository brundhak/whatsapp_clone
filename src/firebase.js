// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzI2cUqcK6rjLew_SXm5r61qdiSB7aDjI",
  authDomain: "wp-bru.firebaseapp.com",
  //databaseURL: "https://wp-bru-default-rtdb.firebaseio.com/",
  projectId: "wp-bru",
  storageBucket: "wp-bru.appspot.com",
  messagingSenderId: "536849032695",
  appId: "1:536849032695:web:833e4752f5ff88f2757af2",
  measurementId: "G-HYRFYMW5RG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
