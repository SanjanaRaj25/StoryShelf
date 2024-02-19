
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

{/* data */}
        <div className='col s5 m6 left' id="left-page">

            <div className='card small amber lighten-4'>
                <div class="card-content black-text">
                    { book.date.length>0 ? (
                        <>
                            <span class="card-title">Read On</span>
                            <hr />
                            <br />
                            <h3>{book.date}</h3>
                        </>
                    ):(
                        <>
                            <img src={doodle1} style={{width:"150px", height:"150px"}} alt="" />
                        </>
                    )}
                </div>
            </div>

            <div className='card small pink lighten-4'>
            <div class="card-content black-text">
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
            </div>

            <div className='card small amber lighten-4'>
            <div class="card-content black-text">

                { book.genre.length > 0 || book.subject.length > 0 || book.first_sentence.length > 0 ? (
                    <>
                        <span class="card-title">More Info:</span>
                        <hr />
                        <br />
                    </>
                ): (<><br /></>)}

                { book.genre.length>0 ? (
                            <>
                                <h6>genre: {book.genre}</h6>
                            </>
                        ):(
                            <><img src={curve} alt="" style={{width:"175px", height: "15px", margin: "10px"}}/></>
                    )}


                { book.subject.length>0 ? (
                        <>
                          
                            <h6>key subjects: {book.subject}</h6>
                        </>
                    ):(
                        <><img src={curve} alt="" style={{width:"175px", height: "15px", margin: "10px"}}/></>
                )}

                { book.first_sentence.length>0 ? (
                        <>
                            <div style={{height: "5px"}}>
                                <br />
                                <span><p>first sentence:</p><p style={{fontSize: "10px"}}>"{book.first_sentence}"</p> </span>
                                <br />
                            </div>
                           
                        </>
                    ):(
                        <><img src={curve} alt="" style={{width:"175px", height: "15px", margin: "10px"}}/></>
                )}

                
                </div>
            </div>

        </div>
        {/* annotations/notes */}
        <div className='col s5 m6 right' id="right-page">

        <div className='card small pink lighten-4'>
            <div class="card-content black-text">

            { book.rating.length>0 ? (
                        <>
                            <span class="card-title">Rating</span>
                            <hr />
                            <br />
                            <h3>{book.rating}</h3> 
                        </>
                    ):(
                        <>
                            <br />
                            <img src={doodle3} alt="" style={{width:"150px", height:"150px"}}/>
                        </>
            )}          
                </div>
        </div>

        {/* book cover (if found) */}
        <div className='card small amber lighten-4'>
            <div class="card-content black-text">

            { book.coverpath.length>0 ? (
                <>
                  
                    <img src={book.coverpath} alt="" style={{maxWidth:"200px", maxHeight:"250px"}}/>
                            
                </>
                ):(
                <>
                    <img src={doodle4} alt="" style={{width:"150px", height:"200px"}}/>
                </>
            )}        
            </div>
        </div>

        {/* less interesting details (isbn, publishing) */}
        <div className='card small pink lighten-4'>
            <div class="card-content black-text">

            { book.publish_date.length > 0 || book.isbn.length > 0 ? (
                    <>
                        <span class="card-title">Book Details:</span>
                        <hr />
                        <br />
                    </>
                ): (<><img src={doodle5} alt="" /></>)}

                { book.publish_date>0 ? (
                            <>
                                <h5>published on: {book.publish_date}</h5>
                            </>
                        ):(
                            
                            <></>
                    )}

                { book.isbn>0 ? (
                        <>
                            <h5>ISBN: {book.isbn}</h5>
                        </>
                    ):(
                        <></>
                )}

                </div>
        </div>


                </div>
                    </div>
                </div>
                
        
            </div>
        </>

    )

}



export default Notes

