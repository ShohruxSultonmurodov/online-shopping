import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDQltUv3KQLYCvAwxf_me_xX50ifmycoUc",
  authDomain: "online-shopping-a3b61.firebaseapp.com",
  projectId: "online-shopping-a3b61",
  storageBucket: "online-shopping-a3b61.appspot.com",
  messagingSenderId: "207856319985",
  appId: "1:207856319985:web:a90fa660bb6f09869c9850",
  measurementId: "G-HJKJYGCTQ3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);