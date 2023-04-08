import firebase from "firebase/app";

import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAuyryZ-pspBt4rKhT_GHv3Uih9UbMr78c",
    authDomain: "chatapp-1c7bd.firebaseapp.com",
    projectId: "chatapp-1c7bd",
    storageBucket: "chatapp-1c7bd.appspot.com",
    messagingSenderId: "547120967778",
    appId: "1:547120967778:web:4be3a43a3d081c0c58213b"
  }).auth(); 