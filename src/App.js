import React from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Library from './components/library/Library';
import ShelfDetails from './components/shelves/ShelfDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateShelf from './components/shelves/CreateShelf';


function App() {
  return (
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;