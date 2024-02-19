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
import { Chip } from 'react-materialize';


const ShelfDetails = () => {

   
    
    const { id } = useParams();
    const dispatch = useDispatch();
    const shelves = useSelector(selectShelfList);

    const shelf = shelves.find(shelf => shelf.id === id);

    const uid = useSelector(state => state.user.uid); 
    console.log(uid);

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
    console.log(shelf.genreList);


    let books = shelf.bookArray;

    return (
        <>

        {/* <div style={{position: "fixed", top: "650px", width: "300px", height: "300px", border: "1px solid black"}}></div> */}
        
        <div className="container section shelf-details">
            <div className="card z-depth-1">
                <div className="card-content pink lighten-5">
                    <span className="card-title"> <h3>{shelf.shelf_name}</h3> </span>
                    <h5>{shelf.description}</h5>
                    <hr />
                    <br />
                    <p>This shelf belongs to <span className='chip'>{ shelf.owner }.</span> It contains <span className='chip blue lighten-4'>{books.length} books</span></p> <br />
                    { shelf.genreList.length > 0 && <p>in the genres of {shelf.genreList.map((genre)=> genre.length > 0 && <span className='chip indigo lighten-4'>{ genre }</span>)}</p>}
                    { shelf.bookArray.length > 0 && <p>click on a volume to learn more! </p> }
                    <br />
                    { owned &&
                    <Link to={`/createBook/${shelf.id}`} className="btn-floating btn-large pink z-depth-1">
                        <i className="large material-icons white-text">add_box</i>
                    </Link>
                }
                </div>
            <div>    


                    <div className="container" id="shelfDisplay">
                    
                        
                    {books.length > 0?(
                        <><img src={cat} alt="hi" id="book-cat" /><div className="shelf z-depth-5">
                                <div class="row" id="bookcards">
                                    <Books books={books} />
                                </div>
                            </div></>
                        
                        ):owned&&(<div className='message-box center'><h5>Click the button to add your first book!</h5></div>)}
                    </div>
                </div>
            </div>
        </div>
        
     </>


    )
}

export default ShelfDetails

