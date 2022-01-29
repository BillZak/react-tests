import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlEgKPERF96sE3f2glKLs5WjzwXx0_eRg",
  authDomain: "instagram-react-3b14d.firebaseapp.com",
  projectId: "instagram-react-3b14d",
  storageBucket: "instagram-react-3b14d.appspot.com",
  messagingSenderId: "280768458979",
  appId: "1:280768458979:web:7f56532971f130086c15d6",
  measurementId: "G-JMX00X7GY9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
