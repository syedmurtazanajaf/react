import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user, onLogout}) => {
  return (
        <nav className='flex bg-emerald-700 w-full h-14 p-4 gap-5 text-white '>
            <h1>NOTE BOOK</h1>
            <div className='ml-auto gap-10 flex pr-10'>
                <Link to="/">Home</Link>
                {user && <Link to="/Profile">Profile</Link>}
                {user ? (<button onClick={onLogout}>Logout</button>) : (<Link to="/auth">Login</Link>)}
            </div>
                
        </nav>
  )
}

export default Navbar