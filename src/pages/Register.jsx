import React, { useState } from 'react'
import { User, Mail, Lock, UserPlus } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Handle register
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        alert(data.error)
        return
      }

      alert('Registration successful')

      navigate('/login')

    } catch (err) {
      console.error('Register error:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-gray-400 mt-3">
            Join and start sharing your blogs
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Name */}
          <div>

            <label className="text-gray-300 text-sm mb-2 block">
              Full Name
            </label>

            <div className="flex items-center bg-gray-800 border border-gray-700 rounded-xl px-4">

              <User className="text-gray-400 w-5 h-5" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-transparent outline-none px-3 py-4 text-white"
              />

            </div>

          </div>

          {/* Email */}
          <div>

            <label className="text-gray-300 text-sm mb-2 block">
              Email
            </label>

            <div className="flex items-center bg-gray-800 border border-gray-700 rounded-xl px-4">

              <Mail className="text-gray-400 w-5 h-5" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none px-3 py-4 text-white"
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="text-gray-300 text-sm mb-2 block">
              Password
            </label>

            <div className="flex items-center bg-gray-800 border border-gray-700 rounded-xl px-4">

              <Lock className="text-gray-400 w-5 h-5" />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                className="w-full bg-transparent outline-none px-3 py-4 text-white"
              />

            </div>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-gray-900 font-semibold py-4 rounded-xl hover:bg-gray-200 transition duration-300 flex items-center justify-center gap-2"
          >
            <UserPlus className="w-5 h-5" />
            Register
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-8">

          Already have an account?

          <Link
            to="/login"
            className="text-white hover:text-gray-300 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Register