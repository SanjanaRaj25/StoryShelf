import React from 'react';
import { Link } from 'react-router-dom';

const ShelfButton = () => {
    return (
        <div className="col s6 m3">
            <div className="card small z-depth-0" id="add-card">

            <div className="card-content"  id="add"> 
                {/* <h5> add a new shelf!</h5> */}

                <Link to="/create"className="btn btn-large pink lighten-4 pulse z-depth-4">
                    <i className="material-icons">add</i>
                </Link>

            </div>

            </div>
        </div>
       
    )
}

export default ShelfButton