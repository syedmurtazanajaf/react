import React, { useState } from 'react'
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const Auth = () => {

  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    setError("")
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
    } catch (error) {
          setError(error.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
  <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
      {isRegister ? "Register" : "Login"}
    </h2>

    {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

    <div className="space-y-4">
      <input
        type="email"
        placeholder="Enter Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Enter Password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
      >
        {isRegister ? "Register" : "Login"}
      </button>
    </div>

    <p className="text-center text-sm text-gray-600 mt-6">
      {isRegister ? "Already have an account?" : "Don't have an account?"}
      <button
        onClick={() => setIsRegister(!isRegister)}
        className="ml-2 text-blue-600 hover:underline font-medium"
      >
        {isRegister ? "Login" : "Register"}
      </button>
    </p>
  </div>
</div>

  )
}

export default Auth