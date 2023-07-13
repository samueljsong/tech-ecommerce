import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import { Store } from './pages/Store'
import './fonts/roboto.ttf'


function App() {

  return (
    
    <div className='container'>
      <Navbar></Navbar>
      <Store></Store>
  
      
    </div>
  )
}

export default App
