import db from '../../config/firebaseConfig';
import { collection, addDoc, getDocs } from "firebase/firestore"; 

// add a new shelf document to the db
export async function addShelf(shelf) {
    const docRef = await addDoc(collection(db, "shelves"), {
        id: shelf.id,
        shelf_name: shelf.shelf_name,
        description: shelf.description,
        books: [ { author: 'JK Rowling', title: 'Harry Potter', genre: 'Fantasy' }],
        num_books: 0,
        genres: 0
        });
    console.log("Document written with ID: ", docRef.id);
    return {
        id: docRef.id,
        ...shelf
    };
}

// get a list of all the shelf documents in the db to update the state

export async function fetchShelves() {

    // query firestore
    const snapshot = await getDocs(collection(db, 'Books'));
    
    // map docs to array  
    const shelves = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  
    return shelves;
  }