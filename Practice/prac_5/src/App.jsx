import React from 'react'
import Card from './componenet/Card'

const App = () => {
const users = [
  {
    "name": "Ali Khan",
    "age": 25,
    "city": "Karachi",
    "profession": "Software Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    "name": "Sara Ahmed",
    "age": 28,
    "city": "Lahore",
    "profession": "Graphic Designer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    "name": "Bilal Hussain",
    "age": 30,
    "city": "Islamabad",
    "profession": "Teacher",
    "profilePhoto": "https://randomuser.me/api/portraits/men/31.jpg"
  },
  {
    "name": "Fatima Noor",
    "age": 22,
    "city": "Rawalpindi",
    "profession": "Content Writer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/41.jpg"
  },
  {
    "name": "Usman Malik",
    "age": 27,
    "city": "Multan",
    "profession": "Marketing Manager",
    "profilePhoto": "https://randomuser.me/api/portraits/men/51.jpg"
  }
]


  return (
   <div>
     <div className='flex'>
      {users.map((elem, index)=>{
        return <Card key={index} username={elem.name} age={elem.age} city={elem.city} profession={elem.profession} photo={elem.profilePhoto}  />
        
      })}
    </div>
   </div>
  )
}

export default App
