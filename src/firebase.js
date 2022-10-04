
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey:"AIzaSyBda9bfUqp_VZm-dluL4sVnfM9T59NkN48",
  authDomain:"portfolio-app-bb7f0.firebaseapp.com",
  projectId:"portfolio-app-bb7f0",
  storageBucket:"portfolio-app-bb7f0.appspot.com",
  messagingSenderId:"900792304606",
  appId:"1:900792304606:web:67250b484e64580722d34f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);