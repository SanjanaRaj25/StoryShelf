
import { Container } from 'react-materialize';
import { useLocation } from 'react-router-dom';
import doodle1 from '../../imgs/doodle1.png'
import doodle2 from '../../imgs/doodle2.png'
import doodle3 from '../../imgs/doodle3.png'
import doodle4 from '../../imgs/doodle4.png'
import doodle5 from '../../imgs/doodle5.png'
import scribble from '../../imgs/scribble.png'
import curve from '../../imgs/curve.png'

// pass in book and shelf

const Notes = () => {
    const location = useLocation();
    const book = location.state.book;

    let img = new Image();
    console.log(book.coverpath);
    img.src = book.coverpath;

    console.log(img.height);
    console.log(img.width);

    return (
        <>
            <div className='container center' id="notebook">
                
                <h1>{book.title}</h1>
                <h3 className='grey-text'> {book.author}</h3>

                <div className='container'>
             
                <div className='row z-depth-2'>
                    <div className='col s5 m5 center' id="left-page">
                        <div className='card small pink lighten-4 z-depth-6 '> <br />

                         
                            { book.bbrating>0 && <><h7 className=""><em>the average rating of this book is:</em></h7>
                            <h5>{book.bbrating} / 5</h5></>}

                            { book.rating.length>0 &&
                                <>
                                     <h7 className=""><em>you rated this book:</em></h7>
                                    <h5>{book.rating} / 5</h5>
                                </>
                            }   

                        </div>
                        <div className='card small purple lighten-4 z-depth-6'>
                                { book.notes.length>0 ? (
                                <>
                                    <span class="card-title">Notes:</span>
                                    <hr />
                                    <br />
                                    <h6>{book.notes}</h6>
                                </>
                            ):(
                                <>
                                    <br /><br />
                                    <img src={doodle2} alt="" style={{width:"150px", height:"150px"}}/>           
                                </>
                            )}
                        </div>
                        <div className='card small blue lighten-4 z-depth-6'>
                            <br />
                            <div className='container'>
                                <h6 className="left">* read on {book.date}</h6><br />
                                { book.numpages>0 && <h6 className="left"> {book.numpages} pages</h6>}<br /><br />
                                <h6 className="left">* {book.subject}</h6><br />
                            </div>
                            


                        </div>
                    </div>

                    <div className='col s5 m7 right' id="right-page">
                    <div className='card small transparent lighten-4 z-depth-0 '>
                        <br />

                        { book.bbdesc ? ( <><h5><em>about this text</em></h5><h6>{book.bbdesc}</h6></>):(<><img src={doodle1} alt="" style={{width:"200px", height:"200px"}}/></>)}

                    </div>
                        <div className='card small transparent lighten-4 z-depth-0 '>
                            { book.coverpath.length>0 ? (
                            <>
                                <img className='z-depth-3' src={book.coverpath} alt="" style={{maxWidth:"200px", maxHeight:"250px"}}/>         
                            </>
                            ):(
                            <>
                                <img src={doodle4} alt="" style={{width:"150px", height:"200px"}}/>
                            </>
                            )}  
                        </div>
                        <div className='card small transparent lighten-4 z-depth-0 '>
                            {book.isbn.length>0 && <h5>isbn #: {book.isbn}</h5>}
                            {book.genre.length>0 && <h5>{book.genre}</h5>}
                            {book.numpages>0 && <h5>{book.numpages} pages</h5>}
                            {book.publish_date && <h5>published on {book.publish_date}</h5>}

                        </div>
                    </div>
                </div>
                </div>
            </div>

           
        </>
      
       
    )

}



export default Notes

