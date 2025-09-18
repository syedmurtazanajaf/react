import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCg89RnBu9-Xhb3bQDdM0-ntTNUywiIbj8",
  authDomain: "todoapp-firebase-aad91.firebaseapp.com",
  projectId: "todoapp-firebase-aad91",
  storageBucket: "todoapp-firebase-aad91.firebasestorage.app",
  messagingSenderId: "587428130149",
  appId: "1:587428130149:web:fb7b034119ea74d1d0458c"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);