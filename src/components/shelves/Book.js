import React from 'react'
import { Link } from 'react-router-dom';

export const Books = ({books}) => {

    return <>{books.map((b)=>(
        <div className="col s1 m1" key={b.id} id="book">
            <Link to={`/books/${b.id}`} key={b.id} state={{book: b}}>
            <div className="card-panel transparent bottom-book z-depth-0" id="book-panel">
                <span className="vertical-text" id="book-spine"> {b.title} by {b.author}</span>
            </div>
            </Link>
            
        </div>
    ))
    }
    </>
}

