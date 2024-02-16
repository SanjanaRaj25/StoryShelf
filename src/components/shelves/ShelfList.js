import React from 'react';
import ShelfSummary from './ShelfSummary';

const ShelfList = ({shelf, user}) => {
    return (
            <ShelfSummary shelf={shelf} key={shelf.id} uid={user}/> 
    )
}

export default ShelfList