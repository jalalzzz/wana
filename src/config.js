import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyChnl-oqiMxcuNKgjP_1dnzxICUUBok90A",
    authDomain: "csoproject-a9dbc.firebaseapp.com",
    projectId: "csoproject-a9dbc",
    storageBucket: "csoproject-a9dbc.appspot.com",
    messagingSenderId: "429906967444",
    appId: "1:429906967444:web:f878193c6d3c22b565ad81",
    measurementId: "G-LX0PFEFNYG"
});


export default firebaseConfig;