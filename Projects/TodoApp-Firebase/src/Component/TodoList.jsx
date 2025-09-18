import React, { useEffect, useState } from 'react'
import { auth, db } from "../firebase"
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from 'firebase/firestore'
import TodoItem from './TodoItem'

const TodoList = () => {

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    if (!auth.currentUser) return
    const q = query (
      collection(db, "todos"),
      where("uid", "==", auth.currentUser.uid),
      orderBy("createdAt", "desc")
    )
    const unsub = onSnapshot(q, (snap)=>{
      setTodos(snap.docs.map(d => ({id: d.id, ...d.data()})))
    })
    return () => unsub()

  }, []);

  const addTodo = async () =>{
    if(!newTodo.trim()) return;
    await addDoc(collection(db, "todos"),{
      text: newTodo,
      uid: auth.currentUser.uid,
      completed: false,
      createdAt: serverTimestamp()
    });
    setNewTodo("")

  };

  const toggleComplete = async (id, current) =>{
    await updateDoc(doc(db, "todos", id), {completed: !current})

  }
  const deleteTodo = async (id) =>{
    await deleteDoc(doc(db, "todos", id))
  }



  return (
   <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
  <h1 className="text-2xl font-semibold text-center mb-4 text-gray-800">
    Todo List
  </h1>

  <div className="flex gap-2">
    <input
      type="text"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      placeholder="New Todos..."
      className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      onClick={addTodo}
      className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
    >
      Add
    </button>
  </div>

  <ul className="mt-6 space-y-2">
    {todos.map((t) => (
      <TodoItem
        key={t.id}
        todo={t}
        onToggle={toggleComplete}
        onDelete={deleteTodo}
      />
    ))}
  </ul>
</div>

  )
}

export default TodoList