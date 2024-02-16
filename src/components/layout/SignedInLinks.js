import React from 'react';
import {  signOut } from "firebase/auth";
import { auth } from '../../config/firebaseConfig';
import { useNavigate, NavLink } from 'react-router-dom';
import { logout } from '../../store/reducers/user';
import { useDispatch } from 'react-redux';

const SignedInLinks = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {               
        signOut(auth).then(() => {
            dispatch(logout);
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
            <li><NavLink to='/Library' className="waves-effect waves-light btn pink accent-1">Library</NavLink></li>
            <li><a onClick={handleLogout} className="Btn waves-effect waves-light btn indigo accent-1">Logout</a></li>
        </ul>
    )
}

export default SignedInLinks;