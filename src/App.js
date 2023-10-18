import React from 'react'
import "./Crud.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Userdata from "./Userdata"

function App() {
  return (
    <>
      <h1> Api Crud </h1>


      <BrowserRouter>
        <Routes>
          <Route path='/userdata' element={<Userdata />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
