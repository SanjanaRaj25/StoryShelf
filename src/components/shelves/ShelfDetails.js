import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CreateBooks } from './CreateBooks';
import { Books } from './Book';
import { Link } from 'react-router-dom';


const ShelfDetails = ({match}) => {
    
    const { pID } = useParams();

    const shelf = useSelector(state => state.shelves.shelfArray[0]);
    console.log(shelf);
    const books = shelf.books;

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
                        
                    </div>
                    <div className="container" id="shelfDisplay">
                    {shelf.books.length > 0?(
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

