import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCROGdS_NPLzQ5FOZJX0yzd0TAIKkt9yqU",
    authDomain: "storyshelf-414719.firebaseapp.com",
    projectId: "storyshelf-414719",
    storageBucket: "storyshelf-414719.appspot.com",
    messagingSenderId: "673018343144",
    appId: "1:673018343144:web:e2fd475ac1a610e961e35d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth };
export default db;


    
