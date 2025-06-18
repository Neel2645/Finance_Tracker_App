// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "financely-react-app.firebaseapp.com",
  projectId: "financely-react-app",
  storageBucket: "financely-react-app.firebasestorage.app",
  messagingSenderId: "589376320980",
  appId: "1:589376320980:web:6b0bb081a542234afa9241",
  measurementId: "G-1ZXGL9PZJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);