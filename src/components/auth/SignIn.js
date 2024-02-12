import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/reducers/user';

const state = {
    email: '',
    password: ''
}


function SignIn() {

    // const dispatch = useDispatch();
    return (
        <div id="auth-background">
            {/* onClick={()=>{
                dispatch(login({email: "asdasdasd", password: "asdsd"}))
            }} */}

        <div className="container">
            <form  className="pink accent-1">
                <h5 className="white-text center">Sign In</h5>

                <div className="input-field">
                    <label className="white-text" htmlFor="email">Email:</label>
                    <input className="white-text" type="email" id="email" />
                </div>

                <div className="input-field">
                    <label className="white-text" htmlFor="password">Password:</label>
                    <input className="white-text" type="password" id="password" />
                </div>

                <div className="input-field">
                    <button className="btn z-depth-2 transparent white-text">submit</button>
                </div>

            </form>
        </div>
    </div>
    );
  }


export default SignIn