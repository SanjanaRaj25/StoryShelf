import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createShelf } from '../../store/actions/shelfActions';


class CreateShelf extends Component {
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
        // console.log(this.state);
        this.props.createShelf(this.state);
    }

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

const mapDispatchToProps = (dispatch) => {
    return {
        createShelf: (shelf) => dispatch(createShelf(shelf))
    }
}

export default connect(null, mapDispatchToProps)(CreateShelf)