// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "khushi-estate.firebaseapp.com",
  projectId: "khushi-estate",
  storageBucket: "khushi-estate.appspot.com",
  messagingSenderId: "218625018078",
  appId: "1:218625018078:web:6428d9586cc3eff2001a4f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);