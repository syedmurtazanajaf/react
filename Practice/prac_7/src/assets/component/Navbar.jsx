import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className='bg-emerald-700 flex text-white pl-5' >
            <h1>MURTAZA</h1>
        <div className='ml-250 flex gap-10'>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
         
        </div>
    </div>
  )
}

export default Navbar