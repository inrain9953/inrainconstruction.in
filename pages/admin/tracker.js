// pages/tracker.jsx
import { useState, useEffect, useRef } from 'react'
import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import ExpenseTable from '@/components/Map/ExpenseTable'
import ConveyanceTable from '@/components/Map/ConveyanceTable'

const COMPANY_NAME = 'InRain Construction Pvt Ltd.'
const MONTH_RE = /^\d{4}-(0[1-9]|1[0-2])$/

// <input type="month"> is a plain text box in some browsers (e.g. desktop
// Safari), so never trust the value without checking its format.
const isValidMonth = value => MONTH_RE.test(value)

// "1,50,000.50" -> 150000.5 | "" -> 0 | "abc" -> null (invalid)
function parseAmount (value) {
  const cleaned = String(value ?? '').replace(/[,\s₹]/g, '')
  if (cleaned === '') return 0
  const n = Number(cleaned)
  return Number.isFinite(n) ? n : null
}

// Fetch a CSV and save it, without navigating away from the page. If the API
// returns an error (400/500 JSON), throw it so we can show a message instead
// of replacing the whole page with raw JSON.
async function downloadCsv (url, fallbackName) {
  const res = await fetch(url)

  if (!res.ok) {
    let message = 'Download failed'
    try {
      const body = await res.json()
      message = body.message || message
    } catch (_) {
      // response wasn't JSON; keep the default message
    }
    throw new Error(message)
  }

  const blob = await res.blob()
  const disposition = res.headers.get('Content-Disposition') || ''
  const match = disposition.match(/filename="?([^";]+)"?/i)
  const filename = match ? match[1] : fallbackName

  const objectUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = objectUrl
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(objectUrl), 1000)
}

const inputClass =
  'rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200'

const actionButtonClass =
  'rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40'

export default function TrackerPage () {
  const [users, setUsers] = useState([])
  const [usersLoading, setUsersLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState({ id: '', name: '' })

  const [trip, setTrip] = useState([])
  const [travelLoading, setTravelLoading] = useState(false)
  const travelController = useRef(null)

  const [travelMonth, setTravelMonth] = useState('')
  const [conveyanceMonth, setConveyanceMonth] = useState('')
  const [expenseMonth, setExpenseMonth] = useState('')
  const [openingBalance, setOpeningBalance] = useState('')

  const [showLedger, setShowLedger] = useState(false)
  const [showConveyance, setShowConveyance] = useState(false)

  const [downloading, setDownloading] = useState(null) // 'conveyance' | 'expense' | null
  const [errorMessage, setErrorMessage] = useState(null)

  const parsedOpeningBalance = parseAmount(openingBalance)
  const openingBalanceInvalid = parsedOpeningBalance === null

  const hasUser = Boolean(selectedUser.id)
  const canGetTravel = hasUser && isValidMonth(travelMonth)
  const canUseConveyance = hasUser && isValidMonth(conveyanceMonth)
  const canUseExpense =
    hasUser && isValidMonth(expenseMonth) && !openingBalanceInvalid

  // Load users once on mount
  useEffect(() => {
    const controller = new AbortController()

    const loadUsers = async () => {
      try {
        setUsersLoading(true)
        const res = await fetch('/api/map/users', { signal: controller.signal })
        if (!res.ok) throw new Error('Failed to load users')

        const result = await res.json()
        if (!Array.isArray(result)) throw new Error('Unexpected users response')

        setUsers(result)
        if (result.length > 0) {
          // selectedUser is an object, so store { id, name }, not just the id
          setSelectedUser({ id: result[0].id, name: result[0].name ?? '' })
        }
      } catch (err) {
        if (err.name === 'AbortError') return
        console.error(err)
        setUsers([])
        setErrorMessage('Could not load users. Refresh the page to try again.')
      } finally {
        if (!controller.signal.aborted) setUsersLoading(false)
      }
    }

    loadUsers()
    return () => controller.abort()
  }, [])

  // Cancel any in-flight travel request when leaving the page
  useEffect(() => () => travelController.current?.abort(), [])

  const handleUserChange = e => {
    const user = users.find(u => String(u.id) === e.target.value)
    setSelectedUser({ id: user?.id ?? '', name: user?.name ?? '' })
    setTrip([]) // don't keep showing the previous user's trips
    setErrorMessage(null)
  }

  const handleGetConveyance = async () => {
    if (!canUseConveyance || downloading) return
    setDownloading('conveyance')
    setErrorMessage(null)
    try {
      const params = new URLSearchParams({
        userId: selectedUser.id,
        month: conveyanceMonth,
        format: 'csv',
        companyName: COMPANY_NAME,
        userName: firstName(selectedUser.name)
      })
      await downloadCsv(
        `/api/map/conveyance?${params.toString()}`,
        `conveyance-${conveyanceMonth}.csv`
      )
    } catch (err) {
      console.error(err)
      setErrorMessage(err.message || 'Could not download conveyance details.')
    } finally {
      setDownloading(null)
    }
  }

  const handleGetExpenses = async () => {
    if (!canUseExpense || downloading) return
    setDownloading('expense')
    setErrorMessage(null)
    try {
      const params = new URLSearchParams({
        userId: selectedUser.id,
        month: expenseMonth,
        format: 'csv',
        openingBalance: String(parsedOpeningBalance),
        companyName: COMPANY_NAME,
        userName: firstName(selectedUser.name)
      })
      await downloadCsv(
        `/api/map/expense?${params.toString()}`,
        `expense-${expenseMonth}.csv`
      )
    } catch (err) {
      console.error(err)
      setErrorMessage(err.message || 'Could not download expense details.')
    } finally {
      setDownloading(null)
    }
  }

  async function getUserTravelDetails () {
    if (!canGetTravel) return

    // A newer click replaces the older request, so a slow response can't
    // overwrite fresher data
    travelController.current?.abort()
    const controller = new AbortController()
    travelController.current = controller

    setTravelLoading(true)
    setErrorMessage(null)
    try {
      const params = new URLSearchParams({
        userId: selectedUser.id,
        month: travelMonth
      })
      const res = await fetch(`/api/map/travel-data?${params.toString()}`, {
        signal: controller.signal
      })
      const result = await res.json().catch(() => null)

      if (!res.ok) {
        throw new Error(result?.message || 'Could not load travel details.')
      }
      setTrip(Array.isArray(result) ? result : [])
    } catch (err) {
      if (err.name === 'AbortError') return
      console.error(err)
      setTrip([])
      setErrorMessage(err.message || 'Could not load travel details.')
    } finally {
      if (travelController.current === controller) setTravelLoading(false)
    }
  }

  return (
    <>
      <Navbar />

      <div className='min-h-screen bg-slate-50'>
        <div className='mx-auto max-w-6xl px-6 py-20'>
          <div className='mb-8'>
            <h1 className='text-2xl font-semibold text-slate-900'>
              Employee Dashboard
            </h1>
            <p className='text-sm text-slate-500'>
              Track team location, conveyance, and expenses.
            </p>
          </div>

          {errorMessage && (
            <div
              role='alert'
              className='mb-6 flex items-start justify-between gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'
            >
              <span>{errorMessage}</span>
              <button
                type='button'
                onClick={() => setErrorMessage(null)}
                aria-label='Dismiss message'
                className='text-red-500 hover:text-red-700'
              >
                ✕
              </button>
            </div>
          )}

          {/* User + date selection */}
          <section className='mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3'>
            <div className='rounded-xl border border-slate-200 bg-white p-5 shadow-sm'>
              <label
                htmlFor='user'
                className='mb-2 block text-sm font-medium text-slate-700'
              >
                User
              </label>

              <select
                id='user'
                value={selectedUser.id}
                onChange={handleUserChange}
                name='user'
                disabled={usersLoading}
                className={`w-full bg-white ${inputClass} disabled:opacity-50`}
              >
                <option value=''>Select User</option>

                {usersLoading && <option disabled>Loading users…</option>}

                {!usersLoading && users.length === 0 && (
                  <option disabled>No users found</option>
                )}

                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
          </section>

          {/* Reports */}
          <section className='mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div className='rounded-xl border border-slate-200 bg-white p-5 shadow-sm'>
              <h3 className='mb-3 text-sm font-semibold text-slate-900'>
                Conveyance details
              </h3>
              <label
                htmlFor='conveyance-month'
                className='mb-2 block text-xs text-slate-500'
              >
                Select month and year
              </label>
              <div className='flex gap-2'>
                <input
                  id='conveyance-month'
                  type='month'
                  value={conveyanceMonth}
                  onChange={e => setConveyanceMonth(e.target.value)}
                  className={`flex-1 ${inputClass}`}
                />
                <button
                  type='button'
                  disabled={!canUseConveyance || downloading !== null}
                  onClick={handleGetConveyance}
                  className={actionButtonClass}
                >
                  {downloading === 'conveyance' ? 'Downloading…' : 'Get'}
                </button>
                <button
                  type='button'
                  disabled={!canUseConveyance}
                  onClick={() => setShowConveyance(true)}
                  className={actionButtonClass}
                >
                  Show
                </button>
              </div>
            </div>

            <div className='rounded-xl border border-slate-200 bg-white p-5 shadow-sm'>
              <h3 className='mb-3 text-sm font-semibold text-slate-900'>
                Expense details
              </h3>
              <label
                htmlFor='expense-month'
                className='mb-2 block text-xs text-slate-500'
              >
                Select month and year
              </label>
              <div className='flex gap-2'>
                <input
                  id='expense-month'
                  type='month'
                  value={expenseMonth}
                  onChange={e => setExpenseMonth(e.target.value)}
                  className={`flex-1 ${inputClass}`}
                />
                <input
                  id='opening-balance'
                  type='text'
                  inputMode='decimal'
                  value={openingBalance}
                  placeholder='Opening Balance'
                  aria-label='Opening balance'
                  aria-invalid={openingBalanceInvalid}
                  onChange={e => setOpeningBalance(e.target.value)}
                  className={`flex-1 ${inputClass} ${
                    openingBalanceInvalid ? 'border-red-400' : ''
                  }`}
                />
                <button
                  type='button'
                  disabled={!canUseExpense || downloading !== null}
                  onClick={handleGetExpenses}
                  className={actionButtonClass}
                >
                  {downloading === 'expense' ? 'Downloading…' : 'Get'}
                </button>
                <button
                  type='button'
                  disabled={!canUseExpense}
                  onClick={() => setShowLedger(true)}
                  className={actionButtonClass}
                >
                  Show
                </button>
              </div>
              {openingBalanceInvalid && (
                <p className='mt-2 text-xs text-red-600'>
                  Opening balance must be a number, like 5000 or 12,500.50.
                </p>
              )}
            </div>
          </section>

          <ExpenseTable
            isOpen={showLedger}
            onClose={() => setShowLedger(false)}
            userId={selectedUser.id}
            month={expenseMonth}
            openingBalance={parsedOpeningBalance ?? 0}
            companyName={COMPANY_NAME}
            userName={selectedUser.name}
          />

          <ConveyanceTable
            isOpen={showConveyance}
            onClose={() => setShowConveyance(false)}
            userId={selectedUser.id}
            month={conveyanceMonth}
            companyName={COMPANY_NAME}
            userName={selectedUser.name}
          />
        </div>
      </div>

      <Footer />
    </>
  )
}

function firstName (name) {
  return (name || '').trim().split(/\s+/)[0] || 'User'
}
