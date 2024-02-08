// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1DWH03axNs--TpyuA-8ZspSe3cl2f0zs",
  authDomain: "photogallery-e10aa.firebaseapp.com",
  projectId: "photogallery-e10aa",
  storageBucket: "photogallery-e10aa.appspot.com",
  messagingSenderId: "951941125089",
  appId: "1:951941125089:web:9da71d7f57232d7dc178a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);