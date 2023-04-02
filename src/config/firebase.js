import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD39Rf-03_-yWItD3oo7BidYIon6XVuioA",
  authDomain: "tiktok-jornada-8db15.firebaseapp.com",
  projectId: "tiktok-jornada-8db15",
  storageBucket: "tiktok-jornada-8db15.appspot.com",
  messagingSenderId: "14187730973",
  appId: "1:14187730973:web:a0c7e9c7763abdaf774ef4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;