import React, { Component } from 'react'

class SignIn extends Component {
    state = {
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
                <h5 className="white-text center">Sign In</h5>

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


    //  <div className="container">
    //     <form onSubmit={this.handleSubmit} className="white">
    //         <h5>Sign In</h5>
    //         <div className="input-field">
    //             <label htmlFor="email">Email:</label>
    //             <input type="email" id="email" onChange={this.handleChange}/>
    //         </div>

    //         <div className="input-field">
    //             <label htmlFor="password">Password:</label>
    //             <input type="password" id="password" onChange={this.handleChange}/>
    //         </div>

    //         <div className="input-field">
    //             <button className="btn pink-lighten-1 z-depth-1">submit</button>
    //         </div>

    //     </form>
    //  </div>
    )
  }
}

export default SignIn