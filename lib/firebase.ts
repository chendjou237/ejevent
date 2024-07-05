import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAN2b0PepiPUCNBN-0tnJYIErhjtPKUzAg",
    authDomain: "ejevent-ff5c6.firebaseapp.com",
    projectId: "ejevent-ff5c6",
    storageBucket: "ejevent-ff5c6.appspot.com",
    messagingSenderId: "126133888871",
    appId: "1:126133888871:web:0b87288b9d3c06319471c2",
    measurementId: "G-9L8X3Y82N7"
  };

  // Initialize Firebase
export  const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp, "gs://ejevent-ff5c6.appspot.com" )