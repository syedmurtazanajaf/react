import React, { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState("")

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(username)
    setUsername("")
  }
  return (
    <div>
      <form className='bg-black h-1000' onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)
        }}

          type="text"
          placeholder="Enter your name"
          className='px-10 py-3 m-5 border-gray-100 bg-amber-100 rounded-2xl' />
        <button className='px-8 py-3 bg-amber-300 border-1 rounded-2xl'>Submit</button>
      </form>

    </div>
  )
}

export default App