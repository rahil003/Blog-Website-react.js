// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACLJEawjsXJ9OpfVH_T-hHdPUIkeuPKRY",
  authDomain: "blogproject-7bb5f.firebaseapp.com",
  projectId: "blogproject-7bb5f",
  storageBucket: "blogproject-7bb5f.appspot.com",
  messagingSenderId: "214701117064",
  appId: "1:214701117064:web:a541457f4ee71eb3f4993d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider();

