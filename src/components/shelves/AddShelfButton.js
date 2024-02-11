import React from 'react';
import { Link } from 'react-router-dom';

const ShelfButton = () => {
    return (
        <div className="col s12 m4">
            <div className="card small pink accent-1" id="add-card">

            <div className="card-content center"  id="add"> 
                {/* <h5> add a new shelf!</h5> */}

                <Link to="/create"className="btn-floating btn-large pink lighten-4 pulse">
                    <i className="material-icons">add</i>
                </Link>

            </div>

            </div>
        </div>
       
    )
}

export default ShelfButton