import React from 'react'
import TodoList from '../Component/TodoList'

const Home = ({ user }) => {

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        Welcome, <span className="text-blue-600">{user.email}</span>
      </h2>

      <TodoList />
    </div>

  )
}

export default Home