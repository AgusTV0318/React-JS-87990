// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLZnDfXu1xGneWtMf7gvnzas0OHohBfSM",
  authDomain: "react-js-87990.firebaseapp.com",
  projectId: "react-js-87990",
  storageBucket: "react-js-87990.firebasestorage.app",
  messagingSenderId: "636713518555",
  appId: "1:636713518555:web:3878720d055ed5dd2793fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
