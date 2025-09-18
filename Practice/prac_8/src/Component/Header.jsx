import React, { useContext } from 'react'
import { DataContext } from '../Context/UserContext'

const Header = () => {
  const data = useContext(DataContext)
  return (
    <div>
        <h1>Header {data.age}</h1>
    </div>
  )
}

export default Header