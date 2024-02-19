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
    const [genre, setGenre] = useState('');
    const [date, setDate] = useState(new Date());


    const handleSubmit = async (e) => {
        e.preventDefault();

        // API call
        const url = `https://openlibrary.org/search.json?`
        const encodedTitle = encodeURI(title);
        const encodedAuthor = encodeURI(author);
        let path = url + `title=${encodedTitle}&`;

        if(encodedAuthor) {
        path += `author=${encodedAuthor}&`; 
        }

        path += 'sort=scans';

        const result = await fetch(path);

        // if (!result.ok) {
        //     alert('Book not found on Open Library. Please check your title and author information.');
        // }

        const json = await result.json();

        // if (json.numFound === 0) {
        //     alert('Book not found on Open Library. Please check your title and author information.');
        //     return;
        // }

        const b = json.docs?.[0] || '' ;

        const isbn = b.isbn?.[0] || '';
        const first_sentence = b.first_sentence?.[0] || '';
        const publish_date = b.publish_date?.[0] || '';
        const subject = b.subject?.[0] || '';
        const fetched_author = b.author?.[0] || author;

        let coverpath = "";
        if(b.cover_i) {
            coverpath = `https://covers.openlibrary.org/b/id/${b.cover_i}-M.jpg`;
        }
        else if (b.olid) {
            const olid = b.olid.replace(/\D/g,'');
            coverpath = `https://covers.openlibrary.org/b/olid/${olid}-M.jpg`;
          
        }
        else if (isbn) {
            coverpath = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`; 
        }

        // add in handling for if api call returns null


        const formattedDate = date.toISOString().split('T')[0];
      
        const i = id.toString();
        let book={
            title, author: fetched_author, genre, rating, i, date: formattedDate, notes, 
            isbn, first_sentence, publish_date, subject, coverpath
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

            <p className="white-text center"> <i>optional information</i></p>

            <div className="input-field">
                <label className="white-text " htmlFor="author">Author:</label>
                <textarea name="" id="author" className="materialize-textarea white-text required" onChange={(e)=>setAuthor(e.target.value)} value={author}></textarea>
            </div>


        <label className="white-text" htmlFor="genre">Genre:</label>
        <div className="input-field">
          <Select 
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
                  <option id="op" value = "Classic">Classic</option>
                  <option id="op" value = "Comic">Comic</option>
                  <option id="op" value = "Mystery">Mystery</option>
                  <option id="op" value = "Fantasy">Fantasy</option>
                  <option id="op" value = "Historical Fiction">Historical Fiction</option>
                  <option id="op" value = "Nonfiction">Nonfiction</option>
                  <option id="op" value = "Horror">Horror</option>
                  <option id="op" value = "Literary Fiction">Literary Fiction</option>
                  <option id="op" value = "Romance">Romance</option>
                  <option id="op" value = "Science Fiction">Science Fiction</option>
                  <option id="op" value = "Short Stories">Short Stories</option>
                  <option id="op" value = "Biographies">Biographies</option>
          </Select>
        </div>
       
        
       <label className="white-text">Date read:</label>

       <React.Fragment>
        <DatePicker className = "white-text"
           
           options={{
            autoClose: true,
            container: 'body',
            selectMonths: true,
            showClearBtn: true,
            theme: 'dark' 
          }}
            value={date.toISOString().split('T')[0]} // Format the date to 'yyyy-mm-dd'
            id="myDate"
            onChange={(newDate) => setDate(newDate)}
        />
        </React.Fragment>

        <div class="input-field">
          <input id="icon_star" type="number" name="points" min="0" max="10" class="validate white-text"/>
          <label for="icon_star" class="white-text" onChange={(e)=>setRating(e.target.value)} value={rating}>Rating: 0-10</label>
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
