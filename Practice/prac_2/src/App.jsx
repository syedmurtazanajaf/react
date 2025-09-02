import React, { useState } from 'react'

const App = () => {

const [num, setNum] = useState(0)


  return (
    <div>
      <h2>Number is {num}</h2>
      <button onClick={()=>{
        setNum(num+1)
      }}>Increment</button>
      <button onClick={()=>{
        setNum(num-1)
      }}>Derement</button>

    </div>
  )
}

export default App