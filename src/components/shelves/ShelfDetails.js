import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Books } from './Book';
import { Link } from 'react-router-dom';
import { selectShelfList } from '../../store/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getShelves } from '../../store/reducers/shelfReducer';
import Library from '../library/Library';
// import { selectShelfById } from '../../store/selectors';


const ShelfDetails = () => {
    
    const { id } = useParams();

    const shelves = useSelector(selectShelfList);

    const shelf = shelves.find(shelf => shelf.id === parseInt(id));

    if(!shelf) {
        return <div>Loading...</div>; 
      }

    let books = shelf.bookArray;

    return (
        <div className="container section shelf-details">
            <div className="card z-depth-1">
                <div className="card-content pink lighten-5">
                    <span className="card-title"> {shelf.shelf_name} </span>
                    <p>{shelf.description}</p>
                    <p>This shelf contains {books.length} books that range across {shelf.genreList.length} different genres</p>
                </div>
                <div>    

                    <div className="deep-purple lighten-5 center" id="addBooks">

                        <a href={`/createBook/${shelf.id}`} class="btn-floating waves-effect waves-light pink lighten-4"><i class="material-icons">book</i> </a>

                        {/* <a href={`/deleteShelf/${id}`} class="btn-floating halfway-fab waves-effect waves-light pink accent-1"><i class="material-icons">delete</i> </a> */}
                        
                        <Link to="/editShelf"className="btn-floating btn-small green lighten-4">
                            <i className="material-icons">edit</i>
                        </Link>
                    </div>
                    <div className="container" id="shelfDisplay">
                    {books.length > 0?(
                        <div class="row" id="bookcards">
                            <Books books={books}/>
                        </div>
                        ):(<div className='message-box'>No books yet</div>)}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShelfDetails

