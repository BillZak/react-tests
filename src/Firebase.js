// import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyDzOpwXff_bcXW5k316_notjQl8VtctN9s",
//   authDomain: "instagram-clone-react-ae91d.firebaseapp.com",
//   projectId: "instagram-clone-react-ae91d",
//   storageBucket: "instagram-clone-react-ae91d.appspot.com",
//   messagingSenderId: "832539972056",
//   appId: "1:832539972056:web:72a8517756777b25e262ad",
//   measurementId: "${config.measurementId}",
// });

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { auth, storage };
// export default db;

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzOpwXff_bcXW5k316_notjQl8VtctN9s",
  authDomain: "instagram-clone-react-ae91d.firebaseapp.com",
  projectId: "instagram-clone-react-ae91d",
  storageBucket: "instagram-clone-react-ae91d.appspot.com",
  messagingSenderId: "832539972056",
  appId: "1:832539972056:web:72a8517756777b25e262ad",
  measurementId: "${config.measurementId}",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
