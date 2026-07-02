import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'
import { parseCookies } from '../api/lib/parsecookies'
import ClickAnalytics from '@/components/ClickAnalytics/ClickAnalytics'

export default function UserData ({ username, initialProducts, initialError }) {
  const [products, setProducts] = useState(initialProducts || [])
  const [error] = useState(initialError || '')
  const [view, setView] = useState('submissions')
  const [callClicks, setCallClicks] = useState([])
  const [whatsappClicks, setWhatsappClicks] = useState([])
  const [deletingId, setDeletingId] = useState(null)
  const [deleteError, setDeleteError] = useState('')
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' })
    router.push('/admin')
  }

  useEffect(() => {
    async function Tracing () {
      const data = await fetch('/api/tracking', { method: 'GET' })
      if (data.ok) {
        const result = await data.json()
        setCallClicks(result.Call)
        setWhatsappClicks(result.Whatsapp)
      }
    }
    Tracing()
  }, [])

  const handleDelete = async id => {
    const confirmed = window.confirm('Delete this lead? This cannot be undone.')
    if (!confirmed) return

    setDeletingId(id)
    setDeleteError('')

    try {
      const res = await fetch(`/api/hello?id=${id}`, {
        method: 'DELETE'
      })

      if (!res.ok) {
        throw new Error('Failed to delete')
      }

      // Optimistically remove from local state — no full page reload needed
      setProducts(prev => prev.filter(p => p._id !== id))
    } catch (err) {
      console.error(err)
      setDeleteError('Failed to delete lead. Please try again.')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <>
      <Navbar />

      <div className='min-h-screen bg-gray-50'>
        {/* Header bar */}
        <div className='bg-white border-b border-gray-200 px-6 sm:px-10 py-4 flex justify-between items-center'>
          <div>
            <p className='text-sm text-gray-500'>Admin Panel</p>
            <p className='text-gray-800 font-medium'>
              Logged in as{' '}
              <span className='font-semibold text-gray-900'>{username}</span>
            </p>
          </div>
          <button
            onClick={handleLogout}
            className='text-sm font-medium text-red-600 border border-red-200 hover:bg-red-50 transition rounded-lg px-4 py-2'
          >
            Logout
          </button>
        </div>

        {/* Content */}
        <div className='max-w-6xl mx-auto px-4 sm:px-8 py-10'>
          <div className='flex items-center justify-between mb-6 flex-wrap gap-4'>
            <div>
              <h1 className='text-2xl font-semibold text-gray-900'>
                {view === 'submissions'
                  ? 'User Submissions'
                  : 'Click Analytics'}
              </h1>
              <p className='text-sm text-gray-500 mt-1'>
                {view === 'submissions'
                  ? `${products.length} ${
                      products.length === 1 ? 'entry' : 'entries'
                    } found`
                  : 'Track Call and WhatsApp button clicks'}
              </p>
            </div>

            <button
              onClick={() =>
                setView(view === 'submissions' ? 'analytics' : 'submissions')
              }
              className='text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition rounded-lg px-4 py-2.5'
            >
              {view === 'submissions'
                ? 'View Click Analytics'
                : 'View Submissions'}
            </button>
          </div>

          {view === 'submissions' ? (
            error ? (
              <div className='bg-red-50 border border-red-200 text-red-700 rounded-xl px-6 py-8 text-center'>
                {error}
              </div>
            ) : products.length === 0 ? (
              <div className='bg-white border border-gray-200 rounded-xl px-6 py-16 text-center'>
                <p className='text-gray-400'>No user data found.</p>
              </div>
            ) : (
              <div className='max-w-6xl mx-auto px-4 sm:px-8 py-10'>
                <div className='flex items-center justify-between mb-6'>
                  <div>
                    <h1 className='text-2xl font-semibold text-gray-900'>
                      User Submissions
                    </h1>
                    <p className='text-sm text-gray-500 mt-1'>
                      {products.length}{' '}
                      {products.length === 1 ? 'entry' : 'entries'} found
                    </p>
                  </div>
                </div>

                {error ? (
                  <div className='bg-red-50 border border-red-200 text-red-700 rounded-xl px-6 py-8 text-center'>
                    {error}
                  </div>
                ) : products.length === 0 ? (
                  <div className='bg-white border border-gray-200 rounded-xl px-6 py-16 text-center'>
                    <p className='text-gray-400'>No user data found.</p>
                  </div>
                ) : (
                  <div className='bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden'>
                    <div className='overflow-x-auto'>
                      <table className='w-full text-left border-collapse'>
                        <thead>
                          <tr className='bg-gray-50 border-b border-gray-200'>
                            <th className='text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-4'>
                              Name
                            </th>
                            <th className='text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-4'>
                              Email
                            </th>
                            <th className='text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-4'>
                              Mobile No.
                            </th>
                            <th className='text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-4'>
                              Message
                            </th>
                            <th className='text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-4 text-right'>
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-100'>
                          {products.map(product => (
                            <tr
                              key={product._id || product.email}
                              className='hover:bg-gray-50 transition'
                            >
                              <td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
                                {product.name}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-600 whitespace-nowrap'>
                                {product.email}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-600 whitespace-nowrap'>
                                {product.mobile}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-600 max-w-xs'>
                                <span className='line-clamp-4'>
                                  {product.message}
                                </span>
                              </td>
                              <td className='px-6 py-4 text-right whitespace-nowrap'>
                                <button
                                  onClick={() => handleDelete(product._id)}
                                  disabled={deletingId === product._id}
                                  className='text-xs font-medium text-red-600 border border-red-200 hover:bg-red-50 transition rounded-lg px-3 py-1.5 disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                  {deletingId === product._id
                                    ? 'Deleting...'
                                    : 'Delete'}
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )
          ) : (
            <ClickAnalytics
              callClicks={callClicks}
              whatsappClicks={whatsappClicks}
            />
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}

export async function getServerSideProps ({ req }) {
  const cookies = parseCookies(req.headers.cookie || '')
  const token = cookies.admin_token

  if (!token) {
    return { redirect: { destination: '/admin', permanent: false } }
  }

  let decoded
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET)
  } catch {
    return { redirect: { destination: '/admin', permanent: false } }
  }

  // Fetch data server-side, passing the cookie along so /api/hello
  // can independently verify auth too (defense in depth).
  let initialProducts = []
  let initialError = ''

  try {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const host = req.headers.host
    const res = await fetch(`${protocol}://${host}/api/hello`, {
      headers: { cookie: req.headers.cookie || '' }
    })

    if (!res.ok) {
      initialError = 'Failed to load user data.'
    } else {
      initialProducts = await res.json()
    }
  } catch {
    initialError = 'Failed to load user data.'
  }

  return {
    props: {
      username: decoded.username,
      initialProducts,
      initialError
    }
  }
}
