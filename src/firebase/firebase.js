// Import the functions you need from the SDKs you need

import {auth, initializeApp} from "firebase/app";

import 'firebase/auth';
import 'firebase/firestore';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {
  apiKey: "AIzaSyB9d7yzYjyKl0vADREgtxSedtd2FBE7Iy8",
  authDomain: "store-your-stock.firebaseapp.com",
  projectId: "store-your-stock",
  storageBucket: "store-your-stock.appspot.com",
  messagingSenderId: "352556610893",
  appId: "1:352556610893:web:4f04535ce3f7bd1da47304",
  measurementId: "G-0C0VT6YZGZ"
};

class FirebaseBackend {
  constructor(firebaseConfig) {
    if (firebaseConfig) {
      // Initialize Firebase
      initializeApp(firebaseConfig);
      app.auth().onAuthStateChanged((user) => {
        if (user) {
          localStorage.setItem('authUser', JSON.stringify(user));
        } else {
          localStorage.removeItem('authUser');
        }
      });
    }
  }

  /**
   * Registers the user with given details
   */
  registerUser = (email, password) => {
    return new Promise((resolve, reject) => {  
      app.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          (user) => {
            console.log('sucess')
            resolve(auth().currentUser);
          },
          (error) => {
            console.log(error)
            reject(error);
          }
        );
    });
  }; 
}


let _fireBaseBackend = null;

/**
 * Initilize the backend
 */
const initFirebaseBackend = (config) => {
  if (!_fireBaseBackend) {
    _fireBaseBackend = new FirebaseBackend(config);
  }
  return _fireBaseBackend;
};

/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
  return _fireBaseBackend;
};

export { initFirebaseBackend, getFirebaseBackend };
