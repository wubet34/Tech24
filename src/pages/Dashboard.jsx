import React, { useEffect, useState } from 'react'
import {
  LayoutDashboard,
  User,
  PlusCircle,
  LogOut,
  Mail,
  Calendar
} from 'lucide-react'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token')

        const res = await fetch('http://localhost:3000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const data = await res.json()
        setUser(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchProfile()
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">

      {/* SIDEBAR */}
      <div className="w-64 bg-gray-900 border-r border-gray-800 p-5">

        <h1 className="text-xl font-bold mb-8 text-center">
          My Blog
        </h1>

        <div className="space-y-3">

          <button onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-800">
            <LayoutDashboard size={18} /> Dashboard
          </button>

          <button onClick={() => setActiveTab('profile')}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-800">
            <User size={18} /> Profile
          </button>

          <button onClick={() => setActiveTab('add')}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-800">
            <PlusCircle size={18} /> Add Blog
          </button>

          <button onClick={logout}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-red-600 mt-10">
            <LogOut size={18} /> Logout
          </button>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">

        {/* DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

            <div className="grid grid-cols-3 gap-4">

              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
                Total Blogs: 0
              </div>

              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
                Likes: 0
              </div>

              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
                Views: 0
              </div>

            </div>
          </div>
        )}

        {/* PROFILE */}
        {activeTab === 'profile' && user && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Profile</h2>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 space-y-4">

              <div className="flex items-center gap-3">
                <User className="text-blue-400" />
                <span>{user.name}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-green-400" />
                <span>{user.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="text-yellow-400" />
                <span>
                  {new Date(user.created_at).toLocaleDateString()}
                </span>
              </div>

            </div>
          </div>
        )}

        {/* ADD BLOG */}
        {activeTab === 'add' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Add Blog</h2>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 space-y-4">

              <input
                placeholder="Blog title"
                className="w-full p-3 bg-gray-800 rounded-lg outline-none"
              />

              <textarea
                placeholder="Blog content"
                className="w-full p-3 bg-gray-800 rounded-lg outline-none h-40"
              />

              <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
                Publish
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Dashboard