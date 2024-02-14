import React from 'react';
import {  signOut } from "firebase/auth";
import { auth } from '../../config/firebaseConfig';
import { useNavigate, NavLink } from 'react-router-dom';

const SignedInLinks = () => {

    const navigate = useNavigate();

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")

            // refresh
            window.location.reload();



        }).catch((error) => {
        // An error happened.
        });
    }


    return (
        <ul className="right">
            <li><NavLink to='/Library' className="waves-effect waves-light btn pink accent-1">My Library</NavLink></li>
            {/* <li><NavLink to='/create' className="waves-effect waves-light btn pink accent-1">Create New Shelf</NavLink></li> */}
            <li><btn onClick={handleLogout} className="waves-effect waves-light btn red accent-1">Log Out</btn ></li>
            {/* <li><NavLink to='/' className='btn btn-floating pink accent-1'>SR</NavLink></li> */}
        </ul>
    )
}

export default SignedInLinks;