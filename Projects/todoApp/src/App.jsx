import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false) // ✅ new flag

  // First load -> localStorage se todos nikaal lo
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let savedTodos = JSON.parse(todoString)
      setTodos(savedTodos)
    }
    setIsLoaded(true) // ✅ ab load complete
  }, [])

  // Jab bhi todos change ho -> localStorage update karo (sirf load ke baad)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }, [todos, isLoaded])

  const handleEdit = (e, id) => {
    let t = todos.find(i => i.id === id)
    setTodo(t.todo)
    setEditId(id)
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
  }

  const handleAddOrUpdate = () => {
    if (!todo.trim()) return

    if (editId) {
      let newTodos = todos.map(item =>
        item.id === editId ? { ...item, todo } : item
      )
      setTodos(newTodos)
      setEditId(null)
    } else {
      let newTodos = [...todos, { id: uuidv4(), todo, isComplete: false }]
      setTodos(newTodos)
    }

    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let newTodos = todos.map(item =>
      item.id === id ? { ...item, isComplete: !item.isComplete } : item
    )
    setTodos(newTodos)
  }

  return (
    <>
      <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[35%]'>
        <h1 className='font-bold text-center text-2xl'>iTask - Manage your todos at one place</h1>

        {/* Input Section */}
        <div className='addTodo my-5 flex flex-col gap-4'>
          <h2 className='text-2xl font-bold'>Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className='w-full rounded-full px-5 py-1 bg-white'
            placeholder='Enter todo...'
          />
          <button
            onClick={handleAddOrUpdate}
            className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        {/* Todo List */}
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos to Display</div>}
          {todos.map(item => (
            <div key={item.id} className='todo flex w-full md:w-1/2 my-3 justify-between'>
              <div className='flex gap-5'>
                <input
                  name={item.id}
                  onChange={handleCheckbox}
                  type="checkbox"
                  checked={item.isComplete}
                />
                <div className={item.isComplete ? "line-through" : ""}>
                  {item.todo}
                </div>
              </div>
              <div className='buttons flex h-full'>
                <button
                  onClick={(e) => { handleEdit(e, item.id) }}
                  className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'
                >
                  Edit
                </button>
                <button
                  onClick={(e) => { handleDelete(e, item.id) }}
                  className='bg-red-600 hover:bg-red-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
