// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNWS7pgNcVEarqTh45hO85H2Tjl0v6m2g",
  authDomain: "fir-pwdk-project.firebaseapp.com",
  projectId: "fir-pwdk-project",
  storageBucket: "fir-pwdk-project.appspot.com",
  messagingSenderId: "833460928514",
  appId: "1:833460928514:web:d36bc1c39606e1a9b6271b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);