
import { Container } from 'react-materialize';
import { useLocation } from 'react-router-dom';
// pass in book and shelf

const Notes = () => {
    const location = useLocation();
  
    const book = location.state.book;

    console.log(book);

    return (
        <>
            <div className='container center'>
                
                <h1>book details</h1>
                <h3>{book.title}</h3>
                <h3>{book.author}</h3>
                <h3>read on: {book.date}</h3>
                <h3>{book.genre}</h3>
                <h3>{book.isbn}</h3>
                <h3>{book.notes}</h3>
                <h3>published on {book.publish_date}</h3>
                <h3>rating: {book.rating}</h3>
                <h3>{book.subject}</h3>

                <img src={book.coverpath} alt="" />
        
            </div>
        </>

    )

}



export default Notes

