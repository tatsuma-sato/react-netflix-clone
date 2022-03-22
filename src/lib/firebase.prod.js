// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "netflix-clone-app-dfc16.firebaseapp.com",
  projectId: "netflix-clone-app-dfc16",
  storageBucket: "netflix-clone-app-dfc16.appspot.com",
  messagingSenderId: "95713216204",
  appId: "1:95713216204:web:4c15a05c8cd70d00d86469",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

// const firebase = initializeApp(firebaseConfig)
// export { firebase }
