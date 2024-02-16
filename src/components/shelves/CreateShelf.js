import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { useNavigate } from 'react-router-dom'; 
import { useEffect } from 'react';
import { addShelves, getShelves } from '../../store/reducers/shelfReducer';
import { useSelector } from 'react-redux';

import { auth } from '../../config/firebaseConfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const CreateShelf = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();

    const uid = useSelector(state => state.user.uid); 
    const owner = useSelector(state => state.user.displayName); 

    const shelf = useSelector(state => state.shelves.shelfArray);

    // fields
    const [shelf_name, setShelfName] = useState('');
    const [description, setDescription] = useState('');


    // every shelf is tagged with the id of the user that created it

    // onSubmit
    const onSubmit = (e) => {
        e.preventDefault();
        // if they already have 6 shelves, don't let them add another
        if (shelf && shelf.length > 40){
            console.log('the library is too big! let us clean out some shelves');
        }
        else {
            let newShelf = {
                id: shelf.length,
                shelf_name: shelf_name,
                description: description,
                num_books: 0,
                genres: 0,
                bookArray: [],
                uid : uid,
                owner: owner
            }
            dispatch(addShelves(newShelf));
        }

        setShelfName('');
        setDescription('');
        navigate("/Library");
    }

    // form
        return(
        <div className="container">
        <form onSubmit={onSubmit} className="white">
            <h5 className="white-text center">Create a New Shelf!</h5>
            <div className="input-field">
                <label className="white-text" htmlFor="shelf_name">Shelf Name:</label>
                <input className="white-text" type="text" id="shelf_name" data-length="15" onChange={(e)=>setShelfName(e.target.value)} value={shelf_name}/>
            </div>

            <div className="input-field">
                <label className="white-text" htmlFor="description">Describe this shelf:</label>
                <textarea name="" id="description" className="materialize-textarea white-text" data-length="25" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
            </div>

            <div className="input-field">
                <button type='submit' className="btn transparent z-depth-1">Create</button>
            </div>

        </form>
     </div>
    )
}

export default CreateShelf;