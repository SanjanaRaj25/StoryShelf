import React from 'react';
import ShelfList from '../shelves/ShelfList';
import ShelfButton from '../shelves/AddShelfButton';

// import selectors
import {  useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectShelfList } from '../../store/selectors';

import { useDispatch } from 'react-redux';  
import { getShelves } from '../../store/reducers/shelfReducer';


const Library = (state) => {

    const shelves = useSelector(selectShelfList);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getShelves());
        }, [dispatch]);

    const n = shelves.length;

    const userName = useSelector((state) => state.user.value.firstName);
    

    return (
        
            <div className="library container">
    
                <h3>Hi <span className="pink-text">{userName}</span>, welcome to your personal library! </h3>
                <h5>You can create up to 8 custom shelves by clicking the <span className="pink-text">add</span> button. Select a shelf to view it, add books, make edits, and more!  </h5>
    
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
