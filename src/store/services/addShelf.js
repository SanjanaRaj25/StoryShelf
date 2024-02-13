import db from '../../config/firebaseConfig';
import { collection, addDoc, getDocs, setDoc, deleteDoc, doc } from "firebase/firestore"; 

// add a new shelf document to the db
export async function addShelf(shelf) {
    const docRef = await setDoc(doc(db, "shelves", shelf.id.toString()), {
        id: shelf.id,
        shelf_name: shelf.shelf_name,
        description: shelf.description,
        bookArray: [],
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
    const snapshot = await getDocs(collection(db, 'shelves'));
    
    // map docs to array  
    const shelves = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    console.log("fetched: ", shelves.length);
  
    return shelves;
  }



  // delete a shelf
  export async function deleteShelf(id) {
   
    try {
        const path = 'shelves/'.concat(id);
        await deleteDoc(doc(db, path));
        console.log("Deleted shelf:"+path);

      }
      catch (error) {
        console.log("Error deleting shelf document:", error);
      }

  }
  


    // query fs
    // const docRef = doc(db, "shelves", id);
    // await deleteDoc(docRef);    
    // // const snapshot = await getDocs(collection(db, 'shelves'));
    // // for (var snap of snapshot.docs){
    // //     if(snap.id === id){
    // //         await deleteDoc(doc(db, 'shelves', snap.id));
    // //         console.log("deleted here: ", id);
    // //     }
    // // }
    // console.log("deleted: ", id);
    // return id;
  



