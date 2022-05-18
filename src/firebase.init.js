// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAhzKnco9HkBBDVo3V-b9SMRy7MUKDNNA",
  authDomain: "todo-app-2f640.firebaseapp.com",
  projectId: "todo-app-2f640",
  storageBucket: "todo-app-2f640.appspot.com",
  messagingSenderId: "763750238568",
  appId: "1:763750238568:web:4e8012e680a29d1e106edd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;