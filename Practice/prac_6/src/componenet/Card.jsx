import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Card = () => {

  const [data, setData] = useState([])

    const getData = async ()=>{
      const response = await axios.get("https://fakestoreapi.com/products")
      setData(response.data)

      console.log(data)
    }


    useEffect(() => {
      getData()
    }, [])
    

  return (
    <div className='p-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
     {data.map((elem, index)=>{
        return  <div key={index} className='bg-cyan-600 rounded-xl p-4 text-white shadow-md hover:scale-105 transition'>
          <img src={elem.image} alt={elem.title} className='w-full h-40 object-contain mb-3 bg-white rounded-md p-2 ' />
          <h2 className='font-semibold text-lg truncate'>{elem.title}</h2>
          <p className='text-sm'>{elem.category}</p>
          <p className='font-bold mt-2'>{elem.price}</p>
        </div>

      })}
      </div>

    </div>
  )
}

export default Card