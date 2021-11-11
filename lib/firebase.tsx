import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBvNUxtVMtcFwyEAFlL7QCkP-BKRUZqVA8",
  authDomain: "nextapp-a2bf9.firebaseapp.com",
  databaseURL: "https://nextapp-a2bf9-default-rtdb.firebaseio.com",
  projectId: "nextapp-a2bf9",
  storageBucket: "nextapp-a2bf9.appspot.com",
  messagingSenderId: "600626874731",
  appId: "1:600626874731:web:9d57dfa9957810df93642e",
  measurementId: "G-5PL6VN80L0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export const firestore = firebase.firestore();
export const storage = firebase.storage();