import React from 'react'

const Card = (props) => {
  console.log(props)

  return (
    <div className='bg-violet-500 w-65 h-80 text-center rounded-2xl m-10 py-8'>
      <img className=' ml-12 w-25 h-25 rounded-full mb-3 justify-center ' src={props.photo} />
      <h1>{props.username}</h1>
      <h3>{props.age}</h3>
      <h3>{props.city}</h3>
      <h3>{props.profession}</h3>
      <button className='bg-amber-600 px-2.5 py-1 mt-2.5 rounded-2xl '>Add Friend</button>

    </div>
  )
}

export default Card