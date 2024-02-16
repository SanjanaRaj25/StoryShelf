import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'; 
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import M, { options } from 'materialize-css';
import { addBooks, getShelves } from '../../store/reducers/shelfReducer';


export const CreateBooks = () => {

    const { id } = useParams();
    const shelves = useSelector(state => state.shelves.shelfArray);
    const shelf = shelves.find(shelf => shelf.id === id);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const i =  (shelf.id).toString();
        console.log(i);
        let book={
            title, author, genre, i
        }

        dispatch(addBooks(book));

        // clear form fields
        setTitle('');
        setAuthor('');
        setGenre('');
        // go back to shelf
        navigate(-1); // go back 1 page 
    }

    return(
        <div className="container" onSubmit={handleSubmit}>

        <form className="white">
            <h5 className="white-text center">Add a New Book!</h5>
            <div className="input-field">
                <label className="white-text" htmlFor="title">Title:</label>
                <input className="white-text" type="text" id="title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </div>

            <div className="input-field">
                <label className="white-text" htmlFor="author">Author:</label>
                <textarea name="" id="author" className="materialize-textarea white-text" onChange={(e)=>setAuthor(e.target.value)} value={author}></textarea>
            </div>

            <div className="input-field">
                <label className="white-text" htmlFor="author">Genre:</label>
                <textarea name="" id="genre" className="materialize-textarea white-text" onChange={(e)=>setGenre(e.target.value)} value={genre}></textarea>
            </div>

            {/* <div className="input-field">
                <label className="white-text" htmlFor="author">Genre:</label>
                <select className="white-text" onChange={(e)=>setGenre(e.target.value)}>
                  <option value = "" disabled selected>Select</option>
                  <option value = "Classic">Classic</option>
                  <option value = "Comic">Comic</option>
                  <option value = "Mystery">Mystery</option>
                  <option value = "Fantasy">Fantasy</option>
                  <option value = "Historical Fiction">Historical Fiction</option>
                  <option value = "Nonfiction">Nonfiction</option>
                  <option value = "Horror">Horror</option>
                  <option value = "Literary Fiction">Literary Fiction</option>
                  <option value = "Romance">Romance</option>
                  <option value = "Science Fiction">Science Fiction</option>
                  <option value = "Short Stories">Short Stories</option>
                  <option value = "Biographies">Biographies</option>
               </select>  
            </div> */}

            <div className="input-field">
                <button type='Submit' className="btn transparent z-depth-1">Submit</button>
            </div>

        </form>
     </div>

    )
}
