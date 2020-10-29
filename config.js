import firebase from 'firebase';
//require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBEmt2PhHiuv4ZSlCF3BMGNC63MJNS8bKw",
    authDomain: "bct-donater.firebaseapp.com",
    databaseURL: "https://bct-donater.firebaseio.com",
    projectId: "bct-donater",
    storageBucket: "bct-donater.appspot.com",
    messagingSenderId: "826809602616",
    appId: "1:826809602616:web:0ffbf6bccce59516998ccd"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
