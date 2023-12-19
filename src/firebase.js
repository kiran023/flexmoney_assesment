// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMKJXFdFNSVGXQu-klOS01a-nfylUskfc",
  authDomain: "myportfolio-7bb1a.firebaseapp.com",
  databaseURL: "https://myportfolio-7bb1a-default-rtdb.firebaseio.com",
  projectId: "myportfolio-7bb1a",
  storageBucket: "myportfolio-7bb1a.appspot.com",
  messagingSenderId: "359910790744",
  appId: "1:359910790744:web:7aed439109de3b86ab5c2d",
  measurementId: "G-JKQSHHFYVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);