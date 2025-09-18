import { useEffect, useState } from 'react'
import {onAuthStateChanged, signOut} from "firebase/auth"
import { auth } from './firebase'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Auth from './Pages/Auth'


const App = () => {

    const [user, setUser] = useState(null)
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (u) => setUser(u));
      return() => unsub
    }, [])
    
    const handleLogout = async () =>{
        await signOut(auth)
    }

  return (
    <>
        <Navbar user={user} onLogout={handleLogout}/>
        <div>
          <Routes>
            <Route path='/' element={user ? <Home user={user}/>: <Navigate to="/auth"/>}/>
            <Route path='/Profile' element={user ? <Profile user={user} />: <Navigate to={"/auth"}/>}/>
            <Route path='/auth' element={!user ? <Auth/>: <Navigate to= "/"/>}/>
          </Routes>
        </div>
    </>
  )
}

export default App