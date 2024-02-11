import React, { Component } from 'react';
import ShelfList from '../shelves/ShelfList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Library = (props) => {

    const { shelves } = props;
    
    return (
        <div className="library container">

        <div class="row">
            <div class="col s2 m6">
                {/* render each shelf card */}
            {shelves.map(shelf => {
                return <ShelfList key={shelf.id} shelf={shelf}/>  
            })} 
            </div>
        </div>

        <Link to="/create"className="waves-effect waves-light btn pink">
            <i className="material-icons left">book</i>
            new shelf
        </Link>

            

        </div>
        
        // <div className="library container">
        //     <div className="row">
        //         <div className="col s12 m6">
        //             <ShelfList/>
        //         </div>
        //     </div>
        // </div>
    )
}

const mapStateToProps = (state) => {
    return {
        shelves: state.shelves.shelves
    }
}

export default connect(mapStateToProps)(Library);