import { initializeApp } from 'firebase/app';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { initializeAuth } from '@firebase/auth';
import { getFirestore } from 'firebase/firestore';

 
 // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAz3z5jVrUAdFg6oWHvbk65dG_m0xHmFx0",
    authDomain: "firegram-project-413304.firebaseapp.com",
    projectId: "firegram-project-413304",
    storageBucket: "firegram-project-413304.appspot.com",
    messagingSenderId: "343498707563",
    appId: "1:343498707563:web:9a60fe6e6be2ba4a0dd72e"
  };

 // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
 const app = initializeApp(firebaseConfig);
 export const firestore = getFirestore(app);



