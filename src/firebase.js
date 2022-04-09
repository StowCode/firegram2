// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj0KTPBjchxWwm3ORJqXRAJQBYw7pTn74",
  authDomain: "firegram2-26f43.firebaseapp.com",
  projectId: "firegram2-26f43",
  storageBucket: "firegram2-26f43.appspot.com",
  messagingSenderId: "883253238760",
  appId: "1:883253238760:web:42de9ebda810273bd8e25d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);