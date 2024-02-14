import React from 'react';

import img1 from '../../imgs/shelf1.jpg';
import img2 from '../../imgs/shelf2.jpeg';
import img3 from '../../imgs/shelf3.jpg';
import img4 from '../../imgs/shelf4.jpg';
import img5 from '../../imgs/shelf8.jpg';
import img6 from '../../imgs/shelf6.jpg';
const images = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6];


const ShelfSummary = ({shelf}) => {
    const shelfpic = images[shelf.id];
    return (
      <div className="col s6 m3">
        <div className="card">
            
            <div className="card-image">
                <img src={shelfpic} id = "card-img" alt="books" />
            </div>
            <a href={`/shelves/${shelf.id}`} class="btn-floating halfway-fab waves-effect waves-light white z-depth:5 pulse" id="enter"><i class="material-icons pink-text">chevron_right</i> </a>
            <div className="card-content">
              <span className="card-title black-text darken-two">{shelf.shelf_name}</span>
              <a href={`/deleteShelf/${shelf.id}`} class="btn-floating halfway-fab small waves-effect waves-light red-text transparent"><i class="material-icons red-text">delete</i> </a>
              <div id="card-info">
                <p className="black-text">{shelf.description}</p>
                <p className="grey-text"> contains {shelf.bookArray.length} books</p>
                <p className="grey-text"> contains {shelf.genreList.length} genres</p>
              </div>
              
            </div>
          </div>
      </div>       
    ) 
}

export default ShelfSummary