import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCLxqcF7_5XGARpDZnhT8kMz-6Vx6tAWdA",
    authDomain: "crown-databse.firebaseapp.com",
    projectId: "crown-databse",
    storageBucket: "crown-databse.appspot.com",
    messagingSenderId: "878413783214",
    appId: "1:878413783214:web:07defcbae72052741bcd3f",
    measurementId: "G-H26DJB5TEE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  

