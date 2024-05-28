// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdKvDZ1cC8TNSzBr692vmBsRMW2GvZU0A",
  authDomain: "instagram-clone-7e4f1.firebaseapp.com",
  projectId: "instagram-clone-7e4f1",
  storageBucket: "instagram-clone-7e4f1.appspot.com",
  messagingSenderId: "277391620324",
  appId: "1:277391620324:web:85bace8158bb6ffd9214f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
