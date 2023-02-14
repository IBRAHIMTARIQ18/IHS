// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

export default class Firebase {
  constructor() {
    if (firebaseConfig) {
      const app = initializeApp(firebaseConfig);
      this.auth = getAuth(app)
      onAuthStateChanged(this.auth, (user) => {
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
      console.log(email, password, this.auth)
      createUserWithEmailAndPassword(this.auth, email, password)
        .then(
          (user) => {
            resolve(this.auth?.currentUser);
          },
          (error) => {
            reject(this._handleError(error));
          }
        );
    });
  };

    /**
   * Login user with given details
   */
  loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(this.auth, email, password)
        .then(
          (result) => {
            console.log(result);
            resolve(result);
            // resolve(firebase.auth().currentUser);
          },
          (error) => {
            reject(this._handleError(error));
          }
        );
    });
  };

  /**
   * Logout the user
   */
  logout = () => {
    return new Promise((resolve, reject) => {
      signOut(this.auth)
        .then(() => {
          resolve(true);
        })
        .catch((error) => {
          reject(this._handleError(error));
        });
    });
  };

  setLoggedInUser = (user) => {
    localStorage.setItem('authUser', JSON.stringify(user));
  };

  /**
   * Returns the authenticated user
   */
  getAuthenticatedUser = () => {
    if (!localStorage.getItem('authUser')) return null;
    return JSON.parse(localStorage.getItem('authUser'));
  };

  _handleError(error) {
    var errorMessage = error.message;
    return errorMessage;
  }
}