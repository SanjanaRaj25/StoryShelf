export const createShelf = (shelf) => {
    return (dispatch, getState, { getFirebase, getFirestore })  => {
        // make async call to db, then dispatch the action again

        dispatch({type: 'CREATE_SHELF', shelf });
    }
};