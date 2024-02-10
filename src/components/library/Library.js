import React, { Component } from 'react';
import ShelfList from '../shelves/ShelfList';

const Library = () => {
    return (
        <div className="library container">
            <div className="row">
                <div className="col s12 m6">
                    <ShelfList/>
                </div>
            </div>
        </div>
    )
}

export default Library;