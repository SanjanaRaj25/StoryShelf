import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import logo from '../../imgs/pinkcastle.jpg';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../config/firebaseConfig';

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
           
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setLoggedIn(true);
              
              console.log("uid", uid)
            } else {
              // User is signed out
              console.log("user is logged out")
            }
          });
         
    }, [])

    return (
        <nav className="nav-wrapper pink lighten-5">
            <div className="container pink lighten-5">
                <Link to="/" className="brand-logo left"><img class="circle" src={logo} alt="Freepik" id="castle-logo"/></Link>

                <>{loggedIn && <SignedInLinks/>}</>
                <>{!loggedIn && <SignedOutLinks/>}</>
            
            </div>
        </nav>
    )
}

export default Navbar;