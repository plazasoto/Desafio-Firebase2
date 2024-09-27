// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUzCxHBhEqcId5UDV7DPxbMIiJgP9sVko",
  authDomain: "fir-auth-65c97.firebaseapp.com",
  projectId: "fir-auth-65c97",
  storageBucket: "fir-auth-65c97.appspot.com",
  messagingSenderId: "177375284056",
  appId: "1:177375284056:web:53d284b66946eaff36f32d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;