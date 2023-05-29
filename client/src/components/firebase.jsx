import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD_E1lsTioBmrkNuquvg43enteJeAGIMOI",
  authDomain: "clientproject-e583a.firebaseapp.com",
  projectId: "clientproject-e583a",
  storageBucket: "clientproject-e583a.appspot.com",
  messagingSenderId: "303318288995",
  appId: "1:303318288995:web:5ed780c75e728599124656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth