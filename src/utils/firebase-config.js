import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7X0Eo4G9_Ib3CPF1hg1KDWk6NJP5XwKI",
  authDomain: "react-netflix-clone-e935d.firebaseapp.com",
  projectId: "react-netflix-clone-e935d",
  storageBucket: "react-netflix-clone-e935d.appspot.com",
  messagingSenderId: "423651703463",
  appId: "1:423651703463:web:4b9a396bf8cb1ddc1db982",
  measurementId: "G-XZRTWF6HYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
