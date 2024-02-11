import React from 'react';

import img1 from '../../imgs/shelf1.jpg';
import img2 from '../../imgs/shelf2.jpeg';
import img3 from '../../imgs/shelf3.jpg';
import img4 from '../../imgs/shelf4.jpg';
const images = [img1, img2, img3, img4];


const ShelfSummary = ({shelf}) => {
    const shelfpic = images[shelf.id - 1];
    return (
        
          <div class="card small">
            <div class="card-image">
                <img src={shelfpic} id = "card-img" alt="books" />
              <span class="card-title">{shelf.shelf_name}</span>
              <a href={`/shelves/${shelf.id}`} class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">chevron_right</i> </a>
            </div>
            <div class="card-content">
            <p className="grey-text">{shelf.description}</p>
                <p className="grey-text"> contains {shelf.books} books</p>
                <p className="grey-text"> contains {shelf.genres} genres</p>
            </div>
          </div>
      
   
                
    )
    
}

export default ShelfSummary