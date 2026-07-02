import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'
import { Main1 } from '@/components/main/main1'
import React from 'react'
import logo from '@/public/logo.png'
import tree from '@/public/tree.png'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Input } from '@mui/material'

const index = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLoginSubmit = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      if (res.ok) {
        router.push('/admin/userdata')
      } else {
        const data = await res.json()
        setError(data.message || 'Invalid credentials')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <Navbar />
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 px-4'>
        <form
          onSubmit={handleLoginSubmit}
          className='w-full max-w-sm flex flex-col gap-5 rounded-2xl shadow-2xl bg-white p-8'
        >
          <div className='flex justify-center'>
            <Image
              src={logo}
              alt='logo'
              width={80}
              height={80}
              priority
              unoptimized
            />
          </div>

          <h1 className='text-xl font-semibold text-center text-gray-800'>
            Admin Panel Login
          </h1>

          {error && (
            <p className='text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2'>
              {error}
            </p>
          )}

          <div className='flex flex-col gap-1'>
            <label className='text-sm font-medium text-gray-600'>
              Username
            </label>
            <input
              type='text'
              name='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-sm font-medium text-gray-600'>
              Password
            </label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700'
            />
          </div>

          <button
            type='submit'
            disabled={loading}
            className='bg-slate-800 text-white rounded-lg py-2 font-medium hover:bg-slate-900 transition disabled:opacity-50'
          >
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default index
