import React, { useState } from 'react'
import "./SearchBar.css"


const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState("")

const handleChange = (e) =>{
     setQuery(e.target.value)
     onSearch(e.target.value)
}

  return (
    <div className='search-bar'>
        <input 
        type="text" 
        value={query}
        onChange={handleChange}
        placeholder='Search products...'
        className='search-input'
        />


    </div>
  )
}

export default SearchBar