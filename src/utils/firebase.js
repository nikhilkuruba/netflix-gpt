// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvwQ_OzRIf0rDwc7vKBzaPegxZkyFVXvw",
  authDomain: "netflix-gpt-n237.firebaseapp.com",
  projectId: "netflix-gpt-n237",
  storageBucket: "netflix-gpt-n237.firebasestorage.app",
  messagingSenderId: "656598358057",
  appId: "1:656598358057:web:541d9196893b252fcde438",
  measurementId: "G-VXNQ2FE9ST"
};


// Initialize Firebase`
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();