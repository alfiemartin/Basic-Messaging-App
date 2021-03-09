import { firebase } from "@firebase/app";
import "@firebase/storage";
import "@firebase/firestore";
import "@firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBY6WkiYr8QblfTPlQLmNtuDQ0cz9XPprk",
  authDomain: "chatroom-c36ed.firebaseapp.com",
  projectId: "chatroom-c36ed",
  storageBucket: "chatroom-c36ed.appspot.com",
  messagingSenderId: "149889459117",
  appId: "1:149889459117:web:a39d7ed9dd8829bf7f7724",
  measurementId: "G-7EVCJ3NR8L",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp, provider };
