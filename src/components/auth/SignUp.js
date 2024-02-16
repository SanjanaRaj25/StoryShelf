import React, { Component, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword, updateProfile, getAdditionalUserInfo  } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import { db } from '../../config/firebaseConfig';
import { collection, getDocs, setDoc, deleteDoc, doc, updateDoc, arrayUnion, arrayRemove, increment } from "firebase/firestore"; 



const SignUp = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {

    const name = `${firstName} ${lastName}`;
    console.log(name);
      e.preventDefault()
      try {
        await createUserWithEmailAndPassword(auth, email, password).catch((err)=>console.log(err));
        await updateProfile(auth.currentUser, { displayName: name}).catch((err)=>console.log(err));
        navigate("/signin");
      }
      catch (err) {
        console.log(err);
      }
     
    }

 
  return (
    <div id="auth-background">

    <div className="container">
            <form className="pink accent-1">
                <h5 className="white-text center">Sign Up</h5>

                <div className="input-field ">
                    <label className="white-text" for="firstName">First name:</label>
                    <input className="white-text" type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required autoComplete="John"/>
                </div>

                <div className="input-field ">
                    <label className="white-text" for="lastName">Last name:</label>
                    <input className="white-text" type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required autoComplete="Doe"/>
                </div>

                <div className="input-field ">
                    <label className="white-text" for="email">Email:</label>
                    <input className="white-text validate" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="johndoe123@gmail.com"/>
                </div>

                <div className="input-field ">
                    <label className="white-text" for="password">Password:</label>
                    <input className="white-text validate" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>

                <span class="helper-text" data-error="wrong format" data-success="right"></span>


                <div className="input-field">
                    <button type="submit" onClick={onSubmit} className="btn z-depth-2 transparent white-text">submit</button>
                </div>

            </form>

            <p>
                Returning User? {' '}
                <NavLink to="/signin" >
                    Sign in
                </NavLink>
            </p> 
        </div>

    </div>
  )
}
export default SignUp;