import React from 'react';
import ShelfSummary from './ShelfSummary';

const ShelfList = ({shelf}) => {
    return (
        <div className="shelf-list section">
            <ShelfSummary shelf={shelf} key={shelf.id}/> 
        </div>
    )
}

export default ShelfList