import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/library' className="waves-effect waves-light btn pink accent-1">My Library</NavLink></li>
            {/* <li><NavLink to='/create' className="waves-effect waves-light btn pink accent-1">Create New Shelf</NavLink></li> */}
            <li><NavLink to='/' className="waves-effect waves-light btn pink accent-1">Log Out</NavLink ></li>
            <li><NavLink to='/' className='btn btn-floating pink accent-1'>SR</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;