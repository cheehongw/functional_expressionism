import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX8sxHNB0ZarROH0yqReY4lFjdpnBTF-U",
  authDomain: "tinfood-b800e.firebaseapp.com",
  projectId: "tinfood-b800e",
  storageBucket: "tinfood-b800e.appspot.com",
  messagingSenderId: "782350964147",
  appId: "1:782350964147:web:ef9fdf4058d48ea6a827c6",
  measurementId: "G-RP727BDSDR",
};

const authHandling = firebase.initializeApp(firebaseConfig);

export default authHandling;
