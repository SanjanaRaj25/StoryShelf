import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createShelf } from '../../store/reducers/shelfReducer';

class CreateShelf extends Component {

  render() {
    return (
     <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="white-text center">Create a New Shelf!</h5>
            <div className="input-field">
                <label className="white-text" htmlFor="shelf_name">Shelf Name:</label>
                <input className="white-text" type="text" id="shelf_name" onChange={this.handleChange}/>
            </div>

            <div className="input-field">
                <label className="white-text" htmlFor="description">Describe this shelf:</label>
                <textarea name="" id="description" className="materialize-textarea white-text" onChange={this.handleChange}></textarea>
            </div>

            <div className="input-field">
                <button className="btn transparent z-depth-1">Create</button>
            </div>

        </form>
     </div>
    )
  }
}

export default CreateShelf;