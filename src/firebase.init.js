// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEJAvAogJwAYWh4S1kmAGxNB8_BPtH69s",
    authDomain: "ema-jhon-simple-bff51.firebaseapp.com",
    projectId: "ema-jhon-simple-bff51",
    storageBucket: "ema-jhon-simple-bff51.appspot.com",
    messagingSenderId: "111711578198",
    appId: "1:111711578198:web:94332947774db0e66373f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;