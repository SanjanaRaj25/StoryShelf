import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../../store/reducers/user';



const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/Library");
            console.log(user);
            dispatch(login(user));
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("there was an issue with your login info");
            console.log(errorCode, errorMessage);
            // ..
        });
 
    }
 
  return (
    <div id="auth-background">

    <div className="container">
            <form className="pink accent-1">
                <h5 className="white-text center">Sign In</h5>

                <div className="input-field ">
                    <label className="white-text" for="email">Email:</label>
                    <input className="white-text validate" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="johndoe123@gmail.com"/>
                </div>

                <div className="input-field ">
                    <label className="white-text" for="password">Password:</label>
                    <input className="white-text validate" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password"/>
                </div>


                <div className="input-field">
                    <button type="submit" onClick={onSubmit} className="btn z-depth-2 transparent white-text">submit</button>
                </div>

            </form>

            <p>
                New User {' '}
                <NavLink to="/signup" >
                    Sign Up
                </NavLink>
            </p> 
        </div>

    </div>
  )
}
export default SignIn;