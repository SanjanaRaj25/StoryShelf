import React from 'react'
import { Link } from 'react-router-dom';

export const Books = ({books}) => {

    return <>{books.map((b)=>(
        <div className="col s1 m1 z-depth-6" key={b.id} id="book">
            <Link to={`/books/${b.id}`} key={b.id} state={{book: b}}>

                 <div className="card-panel transparent bottom-book z-depth-0" id="book-panel" style={{paddingBottom: "0"}}>
                     <span className="vertical-text bold" id="book-spine" style={{fontSize:"20px",  fontFamily: "Garamond"}}> {b.title.toUpperCase()}</span>
                </div>
                <hr className='grey-text' style={{opacity:'0.2'}}/>
                <hr className='grey-text' style={{opacity:'0.2'}}/>
                <p  className="center" style={{fontSize:"7px",  fontFamily: "Garamond", marginRight: 10, color:"black", fontStyle: "italic"}}> {b.author.toUpperCase()}</p>
            </Link>
           
        </div>
    ))
    }
    </>
}

