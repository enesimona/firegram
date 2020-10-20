import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCywtEwerHLeekdTnwlReJtTgf9npBt2Yg",
  authDomain: "firegram-ce49a.firebaseapp.com",
  databaseURL: "https://firegram-ce49a.firebaseio.com",
  projectId: "firegram-ce49a",
  storageBucket: "firegram-ce49a.appspot.com",
  messagingSenderId: "393419077561",
  appId: "1:393419077561:web:4990cad9981e942cca6868",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Initialize firestorage
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
