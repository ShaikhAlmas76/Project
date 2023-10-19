import React from 'react'
import "./Crud.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Userdata from "./Userdata"
import Useradd from './Useradd';
import Userdetail from './Userdetail';
import Useredit from './Useredit';


function App() {
  return (
    <>
      <h1 className='color'> Api Crud </h1>


      <BrowserRouter>
        <Routes>
          <Route path='/userdata' element={<Userdata />} />
          <Route path='/Useradd' element={<Useradd />} />
          <Route path='/Userdetail/:userid' element={<Userdetail />} />
          <Route path='/Useredit/:userid' element={<Useredit />} />



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
