import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBAFORCtvWVoqATDQoRfel980VORt_zjB8",
  authDomain: "resto-3cae7.firebaseapp.com",
  projectId: "resto-3cae7",
  storageBucket: "resto-3cae7.appspot.com",
  messagingSenderId: "624991621518",
  appId: "1:624991621518:web:abb009ad5f25d2afc494df"
};

const firebaseApp = initializeApp( firebaseConfig );
export const db = getFirestore( firebaseApp );
