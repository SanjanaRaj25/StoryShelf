import React from 'react'

export const Books = ({books}) => {

    return <>{books.map((b)=>(
        <div className='book' key={b.id}>

            {/* book card */}
            <div className="col s1 m1">
                <div className="card-panel pink darken-2" id="book-panel">
                    <span className="white-text vertical-text" id="book-spine"> {b.title} by {b.author}</span>
                </div>
            </div>
        </div>
    ))
    }
    </>
}

