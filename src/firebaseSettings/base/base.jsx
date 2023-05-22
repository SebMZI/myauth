// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtVbAFghbcidCMdaVtUdN-NBddlk82H7s",
  authDomain: "authproject-ef73a.firebaseapp.com",
  databaseURL:
    "https://authproject-ef73a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "authproject-ef73a",
  storageBucket: "authproject-ef73a.appspot.com",
  messagingSenderId: "740524672960",
  appId: "1:740524672960:web:eaa117facd0a2d2e9daa25",
  measurementId: "G-4RMYP2Z3JV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default app;
export { storage };
