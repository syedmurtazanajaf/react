import React from 'react'

const Profile = ({user}) => {
  return (
   <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg border">
  <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Profile</h2>
  
  <div className="space-y-3 text-gray-700">
    <p className="flex justify-between">
      <span className="font-semibold">Email:</span>
      <span className="break-all">{user.email}</span>
    </p>
    <p className="flex justify-between">
      <span className="font-semibold">UID:</span>
      <span className="truncate max-w-[200px]">{user.uid}</span>
    </p>
    <p className="flex justify-between">
      <span className="font-semibold">Email Verified:</span>
      <span className={user.emailVerified ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
        {user.emailVerified ? "Yes" : "No"}
      </span>
    </p>
  </div>
</div>

  )
}

export default Profile