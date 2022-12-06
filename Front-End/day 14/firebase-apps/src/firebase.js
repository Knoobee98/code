import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBNWS7pgNcVEarqTh45hO85H2Tjl0v6m2g",
    authDomain: "fir-pwdk-project.firebaseapp.com",
    projectId: "fir-pwdk-project",
    storageBucket: "fir-pwdk-project.appspot.com",
    messagingSenderId: "833460928514",
    appId: "1:833460928514:web:cbd7a2d09c0cb1e0b6271b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
