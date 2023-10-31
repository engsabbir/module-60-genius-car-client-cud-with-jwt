import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.FIREBASE_APIKEY,
    // authDomain: import.meta.env.FIREBASE_AUTHDOMAIN,
    // projectId: import.meta.env.FIREBASE_PROJECTID,
    // storageBucket: import.meta.env.FIREBASE_STORAGEBUCKET,
    // messagingSenderId: import.meta.env.FIREBASE_MESSAGINGSENDERID,
    // appId: import.meta.env.FIREBASE_APPID,


    apiKey: "AIzaSyDJKGcmnYGfxEmpJjNQXo51TN6wRZIxJNM",
    authDomain: "car-doctor-b17b2.firebaseapp.com",
    projectId: "car-doctor-b17b2",
    storageBucket: "car-doctor-b17b2.appspot.com",
    messagingSenderId: "706211005376",
    appId: "1:706211005376:web:4a0c7533f2b0d5a0a63e25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;