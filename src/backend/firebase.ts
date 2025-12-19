import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBbYIBpWRk6l4ck1vsxR00OzMSKcyO7kGo",
  authDomain: "music-app-3956c.firebaseapp.com",
  projectId: "music-app-3956c",
  storageBucket: "music-app-3956c.firebasestorage.app",
  messagingSenderId: "797076922792",
  appId: "1:797076922792:web:6a3ba06aef8639769cfd9d",
  measurementId: "G-FHZE0RTGML",
};

console.log("Firebase initialized");

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
