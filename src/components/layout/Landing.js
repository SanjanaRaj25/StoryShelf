import React, { useState, useEffect } from 'react';
import castle from '../../imgs/bookcastle.jpg';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../config/firebaseConfig';


const LandingPage = () => {

    

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