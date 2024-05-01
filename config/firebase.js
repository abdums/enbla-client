 import { getFirestore } from "firebase/firestore";
 import {initializeApp} from 'firebase/app'
import { getAuth } from "firebase/auth";
export const firebaseConfig = {
  apiKey: "AIzaSyBpL01vZEPgQGLelI6aLY_yUhQH9L8hALo",
  authDomain: "food-delivery-66360.firebaseapp.com",
  projectId: "food-delivery-66360",
  storageBucket: "food-delivery-66360.appspot.com",
  messagingSenderId: "952123640627",
  appId: "1:952123640627:web:a1c50874b8d2289fca0c46",
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
export {db, auth}














 