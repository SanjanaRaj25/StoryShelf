import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { useNavigate } from 'react-router-dom'; 
import { useEffect } from 'react';
import { addShelves, getShelves } from '../../store/reducers/shelfReducer';
import { useSelector } from 'react-redux';
// import { create } from '../../store/reducers/shelfReducer';

const CreateShelf = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // fetch shelves;
    useEffect(()=>{
        dispatch(getShelves());
    },[dispatch])


    const shelf = useSelector(state => state.shelves.shelfArray);

    // fields
    const [shelf_name, setShelfName] = useState('');
    const [description, setDescription] = useState('');

    // handleChange

    // onSubmit
    const onSubmit = (e) => {
        e.preventDefault();
        // if they already have 6 shelves, don't let them add another
        if (shelf && shelf.length > 5){
            console.log('you have maxed out your library!');
        }
        else {
            let newShelf = {
                id: shelf.length,
                shelf_name: shelf_name,
                description: description,
                num_books: 0,
                genres: 0,
                bookArray: []
            }
            dispatch(addShelves(newShelf));
        }

        setShelfName('');
        setDescription('');
        // navigate("/shelves");
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