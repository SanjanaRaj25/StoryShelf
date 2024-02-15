import React from 'react';
import { Link } from 'react-router-dom';

const ShelfButton = () => {
    return (
        <div className="col s6 m3">
            <div className="card small z-depth-0" id="add-card">

            <div className="card-content"  id="add"> 
                {/* <h5> add a new shelf!</h5> */}

                <Link to="/create"className="btn-floating btn-large pink z-depth-1">
                    <i className="large material-icons white-text">add_box</i>
                </Link>

            </div>

            </div>
        </div>
       
    )
}

export default ShelfButton