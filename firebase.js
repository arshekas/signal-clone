import "firebase/firestore";
import "firebase/auth"
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDaqJn9IHlVYgd-t_f_NXeOtGDGIuV3Uck",
    authDomain: "signal-clone-ekas.firebaseapp.com",
    projectId: "signal-clone-ekas",
    storageBucket: "signal-clone-ekas.appspot.com",
    messagingSenderId: "758639713874",
    appId: "1:758639713874:web:3698f71fab5e4724cdc98b",
    measurementId: "G-HD26786CYZ"
  };

  let app;
  if(firebase.apps.length === 0)
  {
    app = firebase.initializeApp(firebaseConfig);
  }
  else {
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export  { db, auth };