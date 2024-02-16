import React from 'react';
import ShelfSummary from './ShelfSummary';

const ShelfList = ({shelf, user}) => {
    return (
        <div className="shelf-list section">
            <ShelfSummary shelf={shelf} key={shelf.id} uid={user}/> 
        </div>
    )
}

export default ShelfList