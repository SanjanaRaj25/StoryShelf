import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signup' className="waves-effect waves-light btn pink accent-1">Signup</NavLink></li>
            <li><NavLink to='/signin' className="waves-effect waves-light btn pink accent-1">Log In</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;