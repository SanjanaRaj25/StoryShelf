import { createSelector } from 'reselect';

// select shelves
export const selectShelves = state => state.shelves; 

export const selectShelvesStatus = createSelector(
    [selectShelves],
    shelves => shelves.status 
  );
  
export const selectShelfList = createSelector(
    [selectShelves], 
    shelves => shelves.shelfArray
);
  