import React, { useState, useEffect } from 'react';
import castle from '../../imgs/bookcastle.jpg';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])

    return (
        <div class="container" id="landing-block">
            
            <div class="valign-wrapper">
                <h4 class="center-align white-text" id="greeting">welcome to <span id="underline">storyshelf!</span></h4>
                <p class="center-align white-text">rethink the way you read</p>

                
                <div class="landing-img">
                    <img class="responsive-img" src={castle} alt="books" />
                </div>
            </div>

        </div>
        
    )
}

export default LandingPage;