import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import logo from '../../imgs/pinkcastle.jpg';

const Navbar = () => {
    return (
        <nav className="nav-wrapper pink lighten-5">
            <div className="container pink lighten-5">
                <Link to="/" className="brand-logo"><img class="circle" src={logo} alt="Freepik" id="castle-logo"/></Link>
                <SignedInLinks></SignedInLinks>
                <SignedOutLinks></SignedOutLinks>
            </div>
        </nav>
    )
}

export default Navbar;