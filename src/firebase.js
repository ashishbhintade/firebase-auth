// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvt1HVcB37CFeUyH9oRvJVt-5yBXyX_ow",
  authDomain: "fir-auth-42f34.firebaseapp.com",
  projectId: "fir-auth-42f34",
  storageBucket: "fir-auth-42f34.appspot.com",
  messagingSenderId: "79656584185",
  appId: "1:79656584185:web:a854d197703d736b943328",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
