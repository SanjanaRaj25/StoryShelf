import React from 'react';
import { useDispatch } from 'react-redux'; 
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import { delShelf, getShelves } from '../../store/reducers/shelfReducer';
import { useSelector } from 'react-redux';


const DeleteShelf = () => {
    const { id } = useParams();
    const shelves = useSelector(state => state.shelves.shelfArray);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // const effect = useEffect();
    const shelf = shelves.find(shelf => shelf.id === parseInt(id));

    // onSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        // delete the shelf
        
        const i =  (shelf.id).toString();
        dispatch(delShelf(i));
        // go back to the library
        navigate('/Library');
        

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