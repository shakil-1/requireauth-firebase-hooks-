// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJ1s2Ma156jXqfaaPrkgHsazkh5mDsG2Q",
    authDomain: "requireauth-firebase-hooks.firebaseapp.com",
    projectId: "requireauth-firebase-hooks",
    storageBucket: "requireauth-firebase-hooks.appspot.com",
    messagingSenderId: "189489834074",
    appId: "1:189489834074:web:b731bf9d6f8d3f3fdc1063"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;