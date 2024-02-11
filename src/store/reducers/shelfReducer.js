const initState = {
    shelves: [
        {id: '1', shelf_name: 'read in 2024', description: 'books read in 2024', genres: 5, books: 25},
        {id: '2', shelf_name: 'favorites', description: 'my favorite books', genres: 2, books: 10},
        {id: '3', shelf_name: 'want to read soon', description: 'mystery books that I like', genres: 0, books: 0}
    ]
};

const shelfReducer = (state = initState, action) => {
    // check the action type
    switch (action.type){
        case 'CREATE_SHELF':
            console.log('created new shelf', action.shelf);
    }
    return state;
}

export default shelfReducer