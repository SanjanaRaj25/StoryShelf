import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CreateBooks } from './CreateBooks';
import { Books } from './Book';
import { Link } from 'react-router-dom';
import { selectShelves } from '../../store/selectors';
import { selectShelfList } from '../../store/selectors';
// import { selectShelfById } from '../../store/selectors';


const ShelfDetails = () => {
    
    const { id } = useParams();

    const shelves = useSelector(selectShelfList);

    const shelf = shelves[id];
    let books = shelf.bookArray;

    return (
        <div className="container section shelf-details">
            <div className="card z-depth-1">
                <div className="card-content pink lighten-5">
                    <span className="card-title"> {shelf.shelf_name} </span>
                    <p>{shelf.description}</p>
                    <p>This shelf contains {shelf.num_books} books that range across {shelf.genres} different genres</p>
                </div>
                <div>    

                    <div className="deep-purple lighten-5 center" id="addBooks">

                        <Link to="/createBook"className="btn-floating btn-small pink lighten-4">
                            <i className="material-icons">book</i>
                        </Link>

                        <a href={`/deleteShelf/${id}`} class="btn-floating halfway-fab waves-effect waves-light pink accent-1"><i class="material-icons">delete</i> </a>
                        
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

