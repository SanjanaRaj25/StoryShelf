import React from 'react';

import img1 from '../../imgs/shelf1.jpg';
import img2 from '../../imgs/shelf2.jpeg';
import img3 from '../../imgs/shelf3.jpg';
import img4 from '../../imgs/shelf4.jpg';
import img5 from '../../imgs/shelf8.jpg';
import img6 from '../../imgs/shelf6.jpg';
const images = [img1, img2, img3, img4, img5, img6];


const ShelfSummary = ({shelf}) => {
    const shelfpic = images[shelf.id];
    return (
      <div className="col s6 m3">
        <div className="card">
            <a href={`/shelves/${shelf.id}`} class="btn-floating halfway-fab waves-effect waves-light pink accent-1"><i class="material-icons">chevron_right</i> </a>
            <div className="card-image">
                <img src={shelfpic} id = "card-img" alt="books" />
              
            </div>
            <div className="card-content">
              <span className="card-title pink-text darken-two">{shelf.shelf_name}</span>
              <div id="card-info">
                <p className="black-text">{shelf.description}</p>
                <p className="grey-text"> contains {shelf.books} books</p>
                <p className="grey-text"> contains {shelf.genres} genres</p>
              </div>
              
            </div>
          </div>
      </div>       
    ) 
}

export default ShelfSummary