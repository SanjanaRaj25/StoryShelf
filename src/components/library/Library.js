import React from 'react';
import ShelfList from '../shelves/ShelfList';
import ShelfButton from '../shelves/AddShelfButton';
import {  useSelector } from 'react-redux';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';  
import { getShelves } from '../../store/reducers/shelfReducer';


const Library = (state) => {

    const shelves = useSelector((state) => state.shelves.shelfArray);

    // const dispatch = useDispatch();

    // useEffect(() => {
    // dispatch(getShelves());
    // }, [dispatch]);


    const n = shelves.length;
    console.log(n);
    const userName = useSelector((state) => state.user.value.firstName);
    

    return (
        
            <div className="library container">
    
                <h3>Hi <span className="pink-text">{userName}</span>, welcome to your personal library! </h3>
                <h5>Select a shelf to view it, add books, make edits, and more! You can create up to 4 additional custom shelves. </h5>
    
                <div class="row" id="librarycards">
                    {/* render each shelf card */}
                    {shelves.map(shelf => {
                        return <ShelfList key={shelf.id} shelf={shelf}/>  
                    })} 

                    {/* if there are less than 6 shelves, allow them to add another
                   */}

                    <>{n < 6 && <ShelfButton />}</>

                </div>
            </div>
        )
    } 

export default Library;
