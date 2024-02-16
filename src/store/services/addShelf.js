import db from '../../config/firebaseConfig';
import { collection, getDoc, addDoc, getDocs, setDoc, deleteDoc, doc, updateDoc, arrayUnion, arrayRemove, increment } from "firebase/firestore"; 

// add a new shelf document to the db
export async function addShelf(shelf) {
  const collRef = collection(db, "shelves");
  const s = await addDoc(collRef, {
      shelf_name: shelf.shelf_name,
      description: shelf.description,
      bookArray: [],
      num_books: 0,
      genreList: [], 
      uid: shelf.uid,  
      owner: shelf.owner 
  });
    return {
        id: s.id,
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

    // // add a book to the shelf
    // export async function addBook(book){
    //   const shelfRef = doc(db, "shelves", book.shelfId);

    // // Get the document snapshot
    // const docSnap = await getDoc(shelfRef);

    // // Get existing book array  
    // const existingBooks = docSnap.data().bookArray;  

    // // Push new book
    // existingBooks.push({
    //   title: book.title,
    //   author: book.author,
    //   genre: book.genre
    // });

    // // Write book array back
    // await updateDoc(shelfRef, {
    //   bookArray: existingBooks 
    // });
    // }


  // add a book to the shelf
  export async function addBook(book){
    // get the doc with the right ID
    
    // add book object to array AND update numBooks/genres
    try {
        // figure out how to get id correctly 
        console.log(book.i);
        const shelfRef = doc(db, 'shelves/'.concat(book.i));
        // const shelfRef = doc(db, 'shelves', '1');
       await updateDoc(shelfRef, {
            bookArray: arrayUnion({title: book.title, author: book.author, genre: book.genre}),
            num_books: increment(1), 
            genreList: arrayUnion(book.genre)
       });
      }
      catch (error) {
        console.log("Error adding book:", error);
      }
      return {
        ...book
    };
  }


    // remove book to the shelf
    export async function deleteBook(book){
        // get the doc with the right ID
        
        // add book object to array AND update numBooks/genres
        try {
            // figure out how to get id correctly 
            console.log(book.i);
            const shelfRef = doc(db, 'shelves/'.concat(book.i));
            // const shelfRef = doc(db, 'shelves', '1');
           await updateDoc(shelfRef, {
                bookArray: arrayRemove({title: book.title, author: book.author, genre: book.genre}),
                num_books: increment(-1), 
           });
          }
          catch (error) {
            console.log("Error removing book:", error);
          }
          return {
            ...book
        };
      }
  



