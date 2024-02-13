import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import { delShelf } from '../../store/reducers/shelfReducer';
import { useSelector } from 'react-redux';


const DeleteShelf = () => {
    const { id } = useParams();
    const shelves = useSelector(state => state.shelves.shelfArray);
    const shelf = shelves[id];
    const dispatch = useDispatch();
    const nav = useNavigate();
    
    // const effect = useEffect();

    // onSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        // delete the shelf

        // TODO: MAKE THIS DYNAMIC
        const i =  (shelves[0].id).toString();
        dispatch(delShelf(i));
        // go back to the library

    }

    // form
        return(
        <div className="container">
            <h3 className='red-text'> WARNING: you cannot undo this action</h3>

        <form onSubmit={handleSubmit} className="white">
            <h5 className="white-text center">Delete this shelf?</h5>

            <div className="input-field">
                <button type='submit' className="btn white z-depth-1 red-text">Confirm</button>
            </div>

        </form>
     </div>
    )
}

export default DeleteShelf;