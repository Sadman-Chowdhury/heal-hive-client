// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARoTmLBT5oRUvAZEDfcZ-LWaxQlX_tjjs",
  authDomain: "heal-hive.firebaseapp.com",
  projectId: "heal-hive",
  storageBucket: "heal-hive.appspot.com",
  messagingSenderId: "700165909354",
  appId: "1:700165909354:web:035b8c5399d3ddbd175313"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app