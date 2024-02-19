import React from 'react';

import { useSelector } from 'react-redux';
import img1 from '../../imgs/shelf1.jpg';
import img2 from '../../imgs/shelf2.jpeg';
import img3 from '../../imgs/shelf3.jpg';
import img4 from '../../imgs/shelf4.jpg';
import img5 from '../../imgs/shelf8.jpg';
import img6 from '../../imgs/shelf6.jpg';
import { auth } from '../../config/firebaseConfig';
const images = [img1, img2, img3, img4, img5, img6];


const ShelfSummary = ({shelf}) => {

    let filter = false;

    const uid = useSelector(state => state.user.uid); 

    let n = (shelf.num_pics % 6);
    const shelfpic = images[n];
  

    let g = 0;
    if (shelf.genreList){
      g = shelf.genreList.length
    }
    

    return (
      
      <div className="col s6 m4">

        <div className="card">
            
            <div className="card-image">
                <img src={shelfpic} id = "card-img" alt="books" />
            </div>

            <a href={`/shelves/${shelf.id}`} class="btn-floating halfway-fab waves-effect waves-light white z-depth:5 pulse" id="enter"><i class="material-icons pink-text">chevron_right</i> </a>
            <div className="card-content">
              <span className="card-title black-text darken-two">{shelf.shelf_name}</span>
              { (uid===shelf.uid) && <a href={`/deleteShelf/${shelf.id}`} class="btn-floating halfway-fab small waves-effect waves-light red-text transparent"><i class="material-icons red-text">delete</i> </a>}
              <div id="card-info">
                <p className="black-text">{shelf.description}</p>
                <br />
                {/* <p className="grey-text"> contains {shelf.bookArray.length} books and {shelf.genreList.length} genres</p> */}

              <span>
              <div className="chip deep-purple lighten-4">
                  <span><i className="close material-icons">book</i> {shelf.num_books} books</span>
                </div>

                <div className="chip indigo lighten-4">
                  <span><i className="close material-icons">palette</i> {g} genres</span>
                </div>

              </span>
                
        
              </div>
              {(uid!==shelf.uid) &&
                <div className="chip pink lighten-1 white-text">
                <span><i className="close material-icons">assignment_ind</i> {shelf.owner}</span>
              </div>
              }
              {(uid===shelf.uid) &&
                <div className="chip green lighten-1 white-text">
                <span><i className="close material-icons">assignment_ind</i> {shelf.owner}</span>
              </div>
              }
              
            </div>
          </div>
          </div>
           
    ) 
}

export default ShelfSummary