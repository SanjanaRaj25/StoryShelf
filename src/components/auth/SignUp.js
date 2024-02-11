import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

  render() {
    return (
    <div id="auth-background">

    <div className="container">
            <form onSubmit={this.handleSubmit} className="pink accent-1">
                <h5 className="white-text center">Sign Up</h5>

                <div className="input-field ">
                    <label className="white-text" htmlFor="firstName">First name:</label>
                    <input className="white-text" type="text" id="firstName" onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <label className="white-text" htmlFor="lastName">Last name:</label>
                    <input className="white-text" type="text" id="lastName" onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <label className="white-text" htmlFor="email">Email:</label>
                    <input className="white-text" type="email" id="email" onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <label className="white-text" htmlFor="password">Password:</label>
                    <input className="white-text" type="password" id="password" onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <button className="btn z-depth-2 transparent white-text">submit</button>
                </div>

            </form>
        </div>

    </div>
     
    )
  }
}

export default SignUp