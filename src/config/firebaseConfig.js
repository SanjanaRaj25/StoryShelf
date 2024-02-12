import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAz3z5jVrUAdFg6oWHvbk65dG_m0xHmFx0",
    authDomain: "firegram-project-413304.firebaseapp.com",
    projectId: "firegram-project-413304",
    storageBucket: "firegram-project-413304.appspot.com",
    messagingSenderId: "343498707563",
    appId: "1:343498707563:web:9a60fe6e6be2ba4a0dd72e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// async function getShelves(db){
//     const shelfCol = collection(db, 'shelves');
//     const shelfSnapshot = await getDocs(shelfCol);
//     const shelfList = shelfSnapshot.docs.map(doc => doc.data());
//     return shelfList;
    
// }
// console.log(getShelves(db));

export { app };
export default db;


    
