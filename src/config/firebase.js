import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBsiuzNYy8xxXwyomgUQbBKPWY11OzDs3U",
  authDomain: "tiktok---jornada-b00ee.firebaseapp.com",
  projectId: "tiktok---jornada-b00ee",
  storageBucket: "tiktok---jornada-b00ee.appspot.com",
  messagingSenderId: "125307862432",
  appId: "1:125307862432:web:e8e31f2b18dc471ff738c5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
