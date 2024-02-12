import { addDoc, collection } from "firebase/firestore/lite";
import db from '../../config/firebaseConfig';
import {  useSelector } from 'react-redux';

export const createShelf = (newShelf) => async(dispatch) => {
  // get current shelf length
  const shelves = useSelector((state) => state.shelves.value);
  const n = shelves.length;

  await addDoc(collection(db, 'shelves'), {
    id: {n}, 
    shelf_name: newShelf.shelf_name, 
    description: newShelf.description, 
    genres: 0, 
    books: 0,
  }
  );
}


// {
//     return (dispatch, getState) => {
//       // make async call to database
//       dispatch({ type: 'CREATE_SHELF', shelf });
//     }
//   };