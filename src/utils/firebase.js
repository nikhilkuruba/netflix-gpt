// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8fzTAj8A5sFXoNOz5u-D-XotRtgu-ci8",
  authDomain: "netflixgpt-9999.firebaseapp.com",
  projectId: "netflixgpt-9999",
  storageBucket: "netflixgpt-9999.firebasestorage.app",
  messagingSenderId: "26735587493",
  appId: "1:26735587493:web:1c24aef555c828fbed9d4c",
  measurementId: "G-8XM0PNGS11"
};

// Initialize Firebase`
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();