
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbSybDXeQ_CsGiLSJWr721Kdtj6nSdemE",
  authDomain: "coffee-store-ef70e.firebaseapp.com",
  projectId: "coffee-store-ef70e",
  storageBucket: "coffee-store-ef70e.firebasestorage.app",
  messagingSenderId: "434561466456",
  appId: "1:434561466456:web:db368cad311155db0c0a2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);