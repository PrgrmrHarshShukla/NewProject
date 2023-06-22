import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAI5QCacYIG1n636b9zrwgMZvg_95y-0wo",
  authDomain: "janta-suvidha.firebaseapp.com",
  projectId: "janta-suvidha",
  storageBucket: "janta-suvidha.appspot.com",
  messagingSenderId: "684638099621",
  appId: "1:684638099621:web:56568184fdba65b7c0554c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)