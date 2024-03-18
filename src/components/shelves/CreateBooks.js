import React, { useState } from 'react'
import { useDispatch } from 'react-redux'; 
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DatePicker, Select } from "react-materialize";
import { addBooks } from '../../store/reducers/shelfReducer';


const apikey = '32fa00df851e4bca9cb93d50b8bbccc8';
const gKey = 'AIzaSyCROGdS_NPLzQ5FOZJX0yzd0TAIKkt9yqU'


export const CreateBooks = () => {

    const { id } = useParams();
    
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [notes, setNotes] = useState('');
    const [rating, setRating] = useState(0);
    const [genre, setGenre] = useState('');
    const [date, setDate] = useState(new Date());

    // convert isbn10 to isbn13
    // function convertISBN10to13(isbn10) {
    //     if (!isbn10 || typeof isbn10 !== 'string') {
    //       return ''; 
    //     }
      
    //     // Remove any hyphens
    //     isbn10 = isbn10.replace(/-/g, '');
        
    //     // Check if ISBN-10 is valid
    //     let sum = 0;
    //     for (let i = 0; i < 9; i++) {
    //       sum += (10 - i) * parseInt(isbn10.charAt(i));
    //     }
    //     if (sum % 11 !== 0) {
    //       return '';
    //     }
      
    //     // Calculate the ISBN-13 check digit
    //     let isbn13 = '978' + isbn10;
    //     let check = 0;
    //     for (let i = 0; i < 12; i+=2) {
    //       check += parseInt(isbn13.charAt(i));
    //     }
    //     for (let i = 1; i < 12; i+=2) {  
    //       check += 3 * parseInt(isbn13.charAt(i));
    //     }
    //     check = (10 - (check % 10)) % 10;  
      
    //     isbn13 += check;
    //     return isbn13;  
    //   }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = `https://www.googleapis.com/books/v1/volumes?key=${gKey}&q=`;
        
         //API call to google books
         const encodedTitle = encodeURI(title);
         const encodedAuthor = encodeURI(author);
         let path = url + `intitle:${encodedTitle}`;

         if(encodedAuthor) {
          path += `+inauthor:${encodedAuthor}&`; 
          }

         const res = await fetch(path);
         const r = await res.json();
         const b = r.items[0];

        // fetched author
        const fetched_author = b.volumeInfo.authors[0] || '';

        //text snippet
        const snippet = b.searchInfo.textSnippet || '';

        //subject
        const subject = b.volumeInfo.categories || [];

        //isbn
        const isbn = b.volumeInfo.industryIdentifiers[0].identifier || '';

         //sentence
         const bbdesc = b.volumeInfo.description || '';
         
         // rating
         const bbrating = b.volumeInfo.averageRating || 0;

         //publish date
         const publish_date = b.volumeInfo.publishedDate || '';

         //coverpath
         const coverpath = b.volumeInfo.imageLinks.thumbnail || b.volumeInfo.imageLinks.smallThumbnail || b.volumeInfo.imageLinks.small || b.volumeInfo.imageLinks.medium || b.volumeInfo.imageLinks.large || '';

         // numpages
         const numpages = b.volumeInfo.pageCount || 0;


        // compile data into book object and add to shelf
        const formattedDate = date.toISOString().split('T')[0];
        const i = id.toString();
        let book={
            title, author: fetched_author, genre, rating, i, date: formattedDate, notes, 
            isbn, first_sentence:snippet, publish_date, subject, coverpath, bbid:0, bbdesc, numpages, bbrating, similar_books:[]
        }

        console.log(book);

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
