import React from 'react'

export const Books = ({books}) => {

    return <>{books.map((b)=>(
        // <div className='book' key={b.id}> 
        <div className="col s1 m1" key={b.id} id="book">
            <div className="card-panel transparent bottom-book z-depth-0" id="book-panel">
                <span className="vertical-text" id="book-spine"> {b.title} by {b.author}</span>
            </div>
        </div>
        // </div>
    ))
    }
    </>
}

