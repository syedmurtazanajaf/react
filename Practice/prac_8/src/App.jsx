import React, { useContext } from 'react'
import Header from './Component/Header'
import Section from './Component/Section'
import Footer from './Component/Footer '
import UserContext, { DataContext } from './Context/UserContext'

const App = () => {

  const data = useContext(DataContext)

  return (
   <div>
     <h1>This is App {data.username}</h1>
     <Header/>
     <Section/>
     <Footer/>
   </div>

  )
}

export default App