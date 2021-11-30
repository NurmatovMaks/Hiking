// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsEciV5IoLb85mact4CiuvsodyFjB_Qy4",
  authDomain: "hiking-maksat.firebaseapp.com",
  projectId: "hiking-maksat",
  storageBucket: "hiking-maksat.appspot.com",
  messagingSenderId: "98491729553",
  appId: "1:98491729553:web:2911b60bc9fb9e98462130",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
