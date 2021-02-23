import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';



var firebaseConfig = {
    apiKey: "AIzaSyA3zRnBGyXmc374HcMrIlGcKz5CJvSBpkA",
    authDomain: "reactslackclone-39f40.firebaseapp.com",
    databaseURL: "https://reactslackclone-39f40-default-rtdb.firebaseio.com/",
    projectId: "reactslackclone-39f40",
    storageBucket: "reactslackclone-39f40.appspot.com",
    messagingSenderId: "299917043992",
    appId: "1:299917043992:web:718839671ebb986270966d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;

