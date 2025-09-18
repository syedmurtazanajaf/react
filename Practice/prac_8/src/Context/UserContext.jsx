import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {

    const userData = { 
        username: "Murtaza",
        age: 25,
        city: "Karachi"
    }


  return (
    <div>
        <DataContext.Provider value={userData}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext