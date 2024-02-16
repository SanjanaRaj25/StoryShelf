import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Books } from './Book';
import { Link, Navigate } from 'react-router-dom';
import { selectShelfList } from '../../store/selectors';
import { auth } from '../../config/firebaseConfig';
import { getShelves } from '../../store/reducers/shelfReducer';

import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { selectShelfById } from '../../store/selectors';
import cat from '../../imgs/sleepingcat.png';


// pass in book and shelf

const Notes = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const shelves = useSelector(selectShelfList);
    const shelf = shelves.find(shelf => shelf.id === id);
    const uid = useSelector(state => state.user.uid); 

    useEffect(() => {
        dispatch(getShelves());
        }, [dispatch]);


    if(!shelf) {
        return <div>Loading...</div>; 
      }

    if(!uid) {
        return <Navigate to='/signin'></Navigate>
    }

    const owned = (uid === shelf.uid);

    let books = shelf.bookArray;

    return (
        <div className="container section book-notes blue lighten-5">
           
        </div>

    )
}

export default Notes

