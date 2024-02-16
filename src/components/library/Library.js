import React from 'react';
import ShelfList from '../shelves/ShelfList';
import ShelfButton from '../shelves/AddShelfButton';

// import selectors
import {  useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectShelfList } from '../../store/selectors';
import { Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';  
import { getShelves } from '../../store/reducers/shelfReducer';
import { auth } from '../../config/firebaseConfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { SwitchComponent } from './ToggleSwitch';

const Library = (state) => {

    const auth = getAuth();
    const dispatch = useDispatch();

    const uid = useSelector(state => state.user.uid); 
    const displayName = useSelector(state => state.user.displayName); 

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                return <Navigate to='/signin'></Navigate>
            }
            }); 
    })

    useEffect(() => {
        dispatch(getShelves());
        }, [dispatch]);

    const [isChecked, setChecked] = useState(false);

    const handleToggle = () => {
        setChecked(!isChecked);
    };

    const shelves = useSelector(selectShelfList);
    let n = 0;
    if (shelves){
        n = shelves.length;
    }



    // if they aren't logged in
    if (!uid){
        return <Navigate to='/signin'></Navigate>
    }
    else {
    
        
        return (
            
        
            <div className="library container">
    
                <h3>Hi <span className="pink-text">{displayName.split(" ")[0]}</span>, welcome to the library! </h3>
                <h5>You can create custom shelves by clicking the <span className="pink-text">add</span> button. You can view any shelf, but you'll only be able to edit or delete the ones that belong to you!</h5>

                {/* switch */}
                <div className="switch">
                    <form action="#" className="center z-depth-1">
                        <label>
                        <div className="chip z-depth-1 pink lighten-5">community</div>
                
                        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                        <span className="lever z-depth-1"></span>

                        <div className="chip z-depth-1 purple lighten-5">individual</div>
                        </label>
                    </form>
                </div>
    
                <div class="row" id="librarycards">
                    {/* render each shelf card */}
                    {!isChecked && shelves.map(shelf => {
                        return <ShelfList key={shelf.id} shelf={shelf} uid={uid}/>  
                    })} 

                    {isChecked && shelves.map(shelf => {
                        if (shelf.uid === uid){
                            return <ShelfList key={shelf.id} shelf={shelf} uid={uid}/>  
                        }
                        
                    })} 

                    {/* if there are less than 40 shelves, allow them to add another
                   */}

                    <>{n < 40 && <ShelfButton />}</>

                </div>
            </div>
        )

    }
    } 

export default Library;
