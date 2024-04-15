// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjjfh5U8b37ABG_yKTO2dYmeIdrZZhKCw",
  authDomain: "swatrideshare.firebaseapp.com",
  projectId: "swatrideshare",
  storageBucket: "swatrideshare.appspot.com",
  messagingSenderId: "1029074874816",
  appId: "1:1029074874816:web:ce8fbc5b49af9890af9825",
  measurementId: "G-3RN66MB1JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export necessary variables if needed
//export { app, analytics };