import React from 'react';
import ShelfSummary from './ShelfSummary';

const ShelfList = () => {
    return (
        <div className="shelf-list section">
            <ShelfSummary />
            <ShelfSummary />
            <ShelfSummary />
            <ShelfSummary />
        </div>
    )
}

export default ShelfList