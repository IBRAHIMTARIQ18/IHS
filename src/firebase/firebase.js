// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB9d7yzYjyKl0vADREgtxSedtd2FBE7Iy8",
  authDomain: "store-your-stock.firebaseapp.com",
  projectId: "store-your-stock",
  storageBucket: "store-your-stock.appspot.com",
  messagingSenderId: "352556610893",
  appId: "1:352556610893:web:4f04535ce3f7bd1da47304",
  measurementId: "G-0C0VT6YZGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);