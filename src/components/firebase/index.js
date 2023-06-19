import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBy9PR0hrlZBfpb8nboqVsghFE_CoGsscM",
  authDomain: "music-log-3eef4.firebaseapp.com",
  projectId: "music-log-3eef4",
  storageBucket: "music-log-3eef4.appspot.com",
  messagingSenderId: "305710813007",
  appId: "1:305710813007:web:f9a2907b6ee9aad1f1bf3a",
  measurementId: "G-VBL31CZ9F1"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db }; //auth 맞나