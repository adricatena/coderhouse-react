// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmdku1NsfzRjozQ8wLqrCj0x4E3ot0zYI",
  authDomain: "nerdticias.firebaseapp.com",
  databaseURL: "https://nerdticias-default-rtdb.firebaseio.com",
  projectId: "nerdticias",
  storageBucket: "nerdticias.appspot.com",
  messagingSenderId: "82805780431",
  appId: "1:82805780431:web:178ed39399c9633469acba",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
