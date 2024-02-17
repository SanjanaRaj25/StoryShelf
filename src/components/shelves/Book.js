import React from 'react'

export const Books = ({books}) => {
    // <a href={`/shelves/${shelf.id}`} class="btn-floating halfway-fab waves-effect waves-light white z-depth:5 pulse" id="enter"><i class="material-icons pink-text">chevron_right</i> </a>

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

