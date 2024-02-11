export const createShelf = (shelf) => {
    return (dispatch, getState) => {
      // make async call to database
      dispatch({ type: 'CREATE_SHELF', shelf });
    }
  };