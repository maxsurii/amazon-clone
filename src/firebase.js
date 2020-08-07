import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA7Ut1Bdd6hjQXiIMoKV2FqymimZKbvJcA",
    authDomain: "clone-295b7.firebaseapp.com",
    databaseURL: "https://clone-295b7.firebaseio.com",
    projectId: "clone-295b7",
    storageBucket: "clone-295b7.appspot.com",
    messagingSenderId: "603429786766",
    appId: "1:603429786766:web:47f58ffcea3d143c3765df"
  
});

const auth = firebase.auth()

export {auth};