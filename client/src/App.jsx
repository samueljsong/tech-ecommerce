import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom" 


function App() {

  return (
    
    <div className='container'>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
            <Route index element={<Landing/>}></Route>
            <Route path='/store' element={<Store/>}></Route>
            <Route path='/about' element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
