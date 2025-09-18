import React from 'react'

const TodoItem = ({todo, onToggle, onDelete}) => {
  return (
   <li className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-xl shadow-sm hover:bg-gray-200 transition">
  <span
    onClick={() => onToggle(todo.id, todo.completed)}
    className={`cursor-pointer select-none ${
      todo.completed ? "line-through text-gray-500" : "text-gray-800"
    }`}
  >
    {todo.text}
  </span>

  <button
    onClick={() => onDelete(todo.id)}
    className="ml-4 px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
  >
    Delete
  </button>
</li>

  )
}

export default TodoItem