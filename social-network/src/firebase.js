import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAhOjpG45aKliUa_n_lJWyLc2NyhWm3P84",
  authDomain: "react-social-network-322fb.firebaseapp.com",
  projectId: "react-social-network-322fb",
  storageBucket: "react-social-network-322fb.appspot.com",
  messagingSenderId: "690571250637",
  appId: "1:690571250637:web:43b1a812a7dfbb40de5284",
  measurementId: "G-WPF8SJT06K",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
// const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage };
