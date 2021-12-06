import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDzOpwXff_bcXW5k316_notjQl8VtctN9s",
  authDomain: "instagram-clone-react-ae91d.firebaseapp.com",
  projectId: "instagram-clone-react-ae91d",
  storageBucket: "instagram-clone-react-ae91d.appspot.com",
  messagingSenderId: "832539972056",
  appId: "1:832539972056:web:72a8517756777b25e262ad",
  measurementId: "G-82P77PXYRP",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
