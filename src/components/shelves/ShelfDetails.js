import React from 'react';
import { useParams } from 'react-router-dom';

const ShelfDetails = ({match}) => {
    const {id} = useParams();
    return (
        <div className="container section shelf-details">
            <div className="card z-depth-1">
                <div className="card-content">
                    <span className="card-title"> Shelf Title - {id} </span>
                    <p>lorem</p>
                </div>
                
            </div>
        </div>

    )
}

export default ShelfDetails
