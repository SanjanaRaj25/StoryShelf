import React from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Library from './components/library/Library';
import ShelfDetails from './components/shelves/ShelfDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateShelf from './components/shelves/CreateShelf';
import DeleteShelf from './components/shelves/DeleteShelf';
import { CreateBooks } from './components/shelves/CreateBooks';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store';


function App() {

  return (
    <PersistGate loading={null} persistor={persistor}>
       <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/shelves/:id' element={<ShelfDetails/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/create' element={<CreateShelf/>}/>
          <Route path='/createBook/:id' element={<CreateBooks/>}/>
          <Route path='/deleteShelf/:id' element={<DeleteShelf/>}/>
        </Routes>
      </div>
    </BrowserRouter>

    </PersistGate>
   
  );
}

export default App;