// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// import "firebase/auth";
// import "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQZRMA0ueiW2skw53DqLwBCf4OVe2Z8u4",
  authDomain: "netflix-clone-utsav.firebaseapp.com",
  projectId: "netflix-clone-utsav",
  storageBucket: "netflix-clone-utsav.appspot.com",
  messagingSenderId: "907452638757",
  appId: "1:907452638757:web:5bef3ff3eec1edf62841cc",
};
// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const auth = firebase.auth();

// export { auth };
// export default db;
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
