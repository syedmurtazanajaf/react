import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./assets/pages/Home"
import About from "./assets/pages/About"
import Contact from "./assets/pages/Contact"
import Navbar from './assets/component/navbar'


const App = () => {
  return (
    <div>

        <Navbar />

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>



        </Routes>

         

    </div>
  )
}

export default App