import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        shelf_name: '',
        description: ''
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
     <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5>Create a New Shelf!</h5>
            <div className="input-field">
                <label htmlFor="shelf_name">Shelf Name:</label>
                <input type="text" id="shelf_name" onChange={this.handleChange}/>
            </div>

            <div className="input-field">
                <label htmlFor="description">Describe this shelf:</label>
                <textarea name="" id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>

            <div className="input-field">
                <button className="btn pink-lighten-1 z-depth-1">Create</button>
            </div>

        </form>
     </div>
    )
  }
}

export default CreateProject