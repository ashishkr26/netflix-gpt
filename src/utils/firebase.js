// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6JD39XtU2NhOj0OePHCI5ChfI1iTM0Mk",
  authDomain: "netflixgpt-f6e53.firebaseapp.com",
  projectId: "netflixgpt-f6e53",
  storageBucket: "netflixgpt-f6e53.firebasestorage.app",
  messagingSenderId: "201951275162",
  appId: "1:201951275162:web:bd31143480ca5080095723",
  measurementId: "G-RXM8X07GZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);