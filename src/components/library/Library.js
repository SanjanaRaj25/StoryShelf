import React, { Component } from 'react';
import ShelfList from '../shelves/ShelfList';
import ShelfButton from '../shelves/AddShelfButton';
import { connect } from 'react-redux';

var FirstName = 'Sanjana';


const Library = (props) => {

    const { shelves } = props;
    
    return (
        
        <div className="library container">

            <h3>Hi <span className="pink-text">{FirstName}</span>, welcome to your personal library! </h3>
            <h5>Select a shelf to view it, add books, make edits, and more! You can create up to 4 additional custom shelves. </h5>

        <div class="row" id="librarycards">
            
                {/* render each shelf card */}
            {shelves.map(shelf => {
                return <ShelfList key={shelf.id} shelf={shelf}/>  
            })} 

            {/* <ShelfButton></ShelfButton> */}
  
        </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        shelves: state.shelves.shelves
    }
}

export default connect(mapStateToProps)(Library);
