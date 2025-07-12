// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDSA_VDbqRh81xYT2I_5YD-wBRSCKtkHas",
  authDomain: "bhakti-jc.firebaseapp.com",
  projectId: "bhakti-jc",
  storageBucket: "bhakti-jc.firebasestorage.app",
  messagingSenderId: "540605343227",
  appId: "1:540605343227:web:875778a91ea0889648575e",
  measurementId: "G-K68SD8G8BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and DB
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
