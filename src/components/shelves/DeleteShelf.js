import React from 'react';
import { useDispatch } from 'react-redux'; 
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import { delShelf, getShelves } from '../../store/reducers/shelfReducer';
import { useSelector } from 'react-redux';
import { getAuth } from "firebase/auth";


const DeleteShelf = () => {
    const { id } = useParams();
    const shelves = useSelector(state => state.shelves.shelfArray);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    // const effect = useEffect();
    const shelf = shelves.find(shelf => shelf.id === id);
    const uid = useSelector(state => state.user.uid); 
    console.log(uid);
    console.log(shelf.uid);

    // protect logic
    let owner = false;

    const auth = getAuth();
    const user = auth.currentUser;

    // if the shelf doesn't belong to them, they can't delete it
    if (uid === shelf.uid){
        // go back to the library
        owner = true;
    }
    console.log(owner);

    // onSubmit
    const handleSubmit = (e) => {
        // console.log("here");
        // e.preventDefault();
        // delete the shelf

        const i =  (shelf.id).toString();
        console.log("here");
        dispatch(delShelf(i));
        // go back to the library
      
        navigate("/Library");
    }

    // form
        return(
        <div className="container">
        <h3 className='red-text'> WARNING: you cannot undo this action</h3>

            <form onSubmit={handleSubmit} className="white">

                <h5 className="white-text center">Delete this shelf?</h5>

                <div className="input-field">
                    <button type="Submit" className="btn white z-depth-1 red-text">Confirm</button>
                </div>
            </form>
        </div>
        
    )
}

export default DeleteShelf;