import  firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
      apiKey: "AIzaSyCyQUfPcUCz6p8rD-yKlJtwgCxdtuSa_RA",
      authDomain: "ninja-firegram-cc231.firebaseapp.com",
      projectId: "ninja-firegram-cc231",
      storageBucket: "ninja-firegram-cc231.appspot.com",
      messagingSenderId: "250277091374",
      appId: "1:250277091374:web:9b59ccb14b393cd479a7bf",
      measurementId: "G-LR1HV9DLV5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
// export default projectStorage;