// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwsHdWmqjc9W3L-Q4NOVPUeZQCSapN6zk",
  authDomain: "login-auth-944db.firebaseapp.com",
  projectId: "login-auth-944db",
  storageBucket: "login-auth-944db.firebasestorage.app",
  messagingSenderId: "1024856143292",
  appId: "1:1024856143292:web:48b3c882f35dd494c927b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app)
export default app;