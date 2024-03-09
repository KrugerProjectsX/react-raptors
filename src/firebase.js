// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Mw3xknrH7vfsaeTD5rXWvTWrp7SLW7o",
  authDomain: "react-raptors.firebaseapp.com",
  projectId: "react-raptors",
  storageBucket: "react-raptors.appspot.com",
  messagingSenderId: "157679906162",
  appId: "1:157679906162:web:56d2f87304a216de4841eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)