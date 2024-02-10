import React from 'react';
import shelfpic from '../../imgs/shelf3.jpg';

const ShelfSummary = () => {
    return (
        <div class="row">
        <div class="col s12 m6"></div>
        
          <div class="card small">
            <div class="card-image">
                <img src={shelfpic} id = "card-img" alt="books" />
              <span class="card-title">Card Title</span>
              <a href='/shelves/:1' class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">chevron_right</i> </a>
            </div>
            <div class="card-content">
            <p className="grey-text">1 sentence description</p>
                <p className="grey-text"> contains X books</p>
                <p className="grey-text"> contains Y genres</p>
            </div>
          </div>
          </div>
      
   
                
    )
    
}

export default ShelfSummary