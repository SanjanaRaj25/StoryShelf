import React, { useState } from 'react'
import { useDispatch } from 'react-redux'; 

export const CreateBooks = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let book={
            title, author, genre
        }
        // dispatch(postBook(book))
    }
    return(
        <div className="container">

        <form className="white">
            <h5 className="white-text center">Add a New Book!</h5>
            <div className="input-field">
                <label className="white-text" htmlFor="title">Title:</label>
                <input className="white-text" type="text" id="title"/>
            </div>

            <div className="input-field">
                <label className="white-text" htmlFor="author">Author:</label>
                <textarea name="" id="description" className="materialize-textarea white-text"></textarea>
            </div>

            <div className="input-field">
                <label className="white-text" htmlFor="author">Genre:</label>
                <textarea name="" id="description" className="materialize-textarea white-text"></textarea>
            </div>

            <div className="input-field">
                <button type='submit' className="btn transparent z-depth-1">Submit</button>
            </div>

        </form>
     </div>

    )
}
