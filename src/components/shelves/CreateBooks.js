import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'; 
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DatePicker, Select, DropdownOptions } from "react-materialize";
import { addBooks, getShelves } from '../../store/reducers/shelfReducer';


export const CreateBooks = () => {

    const { id } = useParams();
    const shelves = useSelector(state => state.shelves.shelfArray);
    const shelf = shelves.find(shelf => shelf.id === id);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [notes, setNotes] = useState('');
    const [rating, setRating] = useState(0);
    const [genre, setGenre] = useState([]);
    const [date, setDate] = useState(new Date());



    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedDate = date.toISOString().split('T')[0];

        console.log("notes");
        console.log(notes);
        const i =  (shelf.id).toString();
        let book={
            title, author, genre, rating, i, date: formattedDate, notes
        }

        dispatch(addBooks(book));

        // clear form fields
        setRating(0);
        setTitle('');
        setAuthor('');
        setNotes('');
        setGenre([]);
        setDate(new Date());
        // go back to shelf
        navigate(-1); // go back 1 page 
    }

    return(
        <div className="container" onSubmit={handleSubmit} id="bookform">

        <form className="white">
            <h5 className="white-text center">Add a New Book!</h5>
            <div className="input-field">
                <label className="white-text" htmlFor="title">Title:</label>
                <input className="white-text required" type="text" id="title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </div>

            <div className="input-field">
                <label className="white-text " htmlFor="author">Author:</label>
                <textarea name="" id="author" className="materialize-textarea white-text required" onChange={(e)=>setAuthor(e.target.value)} value={author}></textarea>
            </div>

            <p className="white-text center"> <i>extra information</i></p>

        <label className="white-text" htmlFor="genre">Genre:</label>
        <div className="input-field">
          <Select 
            multiple = {true}
            className="black-text"
            id="genre"
            value={genre}
            onChange={(e)=>setGenre(e.target.value)}
            options={{
                container: 'inline', // You can change the container to 'inline' or other values
                labelStyle: { color: 'pink' },
                inputStyle: { color: 'black', backgroundColor: 'white' }, // Add custom styles
            }}
          >
                <option value = "" disabled>Select Most Applicable Genre</option>
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
          </Select>
        </div>

            {/* <div className="input-field">
                <label className="white-text" htmlFor="author">Genre:</label>
                <textarea name="" id="genre" className="materialize-textarea white-text" onChange={(e)=>setGenre(e.target.value)} value={genre}></textarea>
            </div> */}

       
      

        
       <label className="white-text">Date read:</label>

       <React.Fragment>
        <DatePicker
            className="white-text"
            options={{
            format: 'yyyy-mm-dd', // Adjust the format as needed
            container: 'body', // You can change the container to 'inline' or other values
            theme: 'teal',
            labelStyle: { color: 'white' },
            }}
            value={date.toISOString().split('T')[0]} // Format the date to 'yyyy-mm-dd'
            id="myDate"
            onChange={(newDate) => setDate(newDate)}
        />
        </React.Fragment>

        <div class="input-field">
          <input id="icon_star" type="number" name="points" min="0" max="10" class="validate white-text"/>
          <label for="icon_star" class="white-text" onChange={(e)=>setRating(e.target.value)} value={rating}>Rating: 0.0-10.0</label>
        </div>



        <div className="input-field">
                <label className="white-text " htmlFor="notes">Notes:</label>
                <textarea name="" id="author" className="materialize-textarea white-text required" onChange={(e)=>setNotes(e.target.value)} value={notes}></textarea>
            </div>

       

            <div className="input-field">
                <button type='Submit' className="btn transparent z-depth-1">Submit</button>
            </div>

        </form>
     </div>

    )
}
