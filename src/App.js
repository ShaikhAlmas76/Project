import React from 'react'
import "./Crud.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Userdata from "./Userdata"
import Useradd from './Useradd';

function App() {
  return (
    <>
      <h1 className='color'> Api Crud </h1>


      <BrowserRouter>
        <Routes>
          <Route path='/userdata' element={<Userdata />} />
          <Route path='/Useradd' element={<Useradd />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
