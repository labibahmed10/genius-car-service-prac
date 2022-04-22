// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZNGltrKnzvVV4ZXW8-Y5AmNWKirKvZog",
  authDomain: "genius-car-service-3f5af.firebaseapp.com",
  projectId: "genius-car-service-3f5af",
  storageBucket: "genius-car-service-3f5af.appspot.com",
  messagingSenderId: "554682027681",
  appId: "1:554682027681:web:41e00fc98b85d87c6beae0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
