import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Location = [
  { loc: 'Delhi', slug: '', pincode: '110001', id: 7 },
  { loc: 'Noida', slug: 'noida', pincode: '201301', id: 1 },
  { loc: 'Gurgaon', slug: 'gurgaon', pincode: '122001', id: 2 },
  { loc: 'Bengaluru', slug: 'bengaluru', pincode: '560001', id: 3 },
  { loc: 'Hyderabad', slug: 'hyderabad', pincode: '500001', id: 4 },
  { loc: 'Pune', slug: 'pune', pincode: '411001', id: 5 },
  { loc: 'Chennai', slug: 'chennai', pincode: '600001', id: 6 }
]

const IconChevron = ({ open }) => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
  >
    <polyline points='6 9 12 15 18 9' />
  </svg>
)

const IconPin = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z' />
    <circle cx='12' cy='10' r='3' />
  </svg>
)

const IconCheck = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='20 6 9 17 4 12' />
  </svg>
)

export default function LocationDropdown () {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const router = useRouter()
  const ref = useRef(null)

  // Close on outside click
  useEffect(() => {
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    if (!router.isReady) return

    const slug = router.query?.location?.replace('/', '') // "" | "pune" | "bengaluru" …

    if (!slug) {
      setSelected(Location.find(l => l.slug === ''))
    }

    const match =
      slug === ''
        ? Location.find(l => l.slug === '') // "/" → Delhi
        : Location.find(l => l.slug === slug) // "/pune" → Pune, etc.

    if (match) setSelected(match)
  }, [router.pathname])

  const handleSelect = loc => {
    setSelected(loc)
    setOpen(false)
  }

  return (
    <div ref={ref} className='absolute inline-block'>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        aria-haspopup='listbox'
        className={`flex items-center shadow-xl bg-sky-200 md:ml-4 gap-2 px-3.5 py-2 text-sm font-medium rounded-b-2xl border transition-colors duration-150 cursor-pointer
          ${
            open
              ? 'bg-indigo-50 text-indigo-600 border-indigo-200'
              : 'bg-white text-gray-600 border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200'
          }`}
      >
        <IconPin />
        <span>{selected ? selected.loc : 'Loading...'}</span>
        <IconChevron open={open} />
      </button>

      {/* Dropdown List */}
      {open && (
        <ul
          role='listbox'
          className='absolute top-[calc(100%+8px)] left-6 bg-white border border-gray-200 rounded-xl shadow-lg min-w-[160px] overflow-hidden z-50 p-1'
          style={{ animation: 'dropIn 0.16s ease' }}
        >
          <style>{`
            @keyframes dropIn {
              from { opacity: 0; transform: translateY(-6px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          {Location.map(loc => {
            const isSelected = selected?.id === loc.id
            return (
              <li
                key={loc.id}
                role='option'
                aria-selected={isSelected}
                onClick={() => handleSelect(loc)}
              >
                <Link
                  className={`flex items-center justify-between gap-3 px-3.5 py-2.5 text-sm rounded-lg cursor-pointer transition-colors duration-100
                  ${
                    isSelected
                      ? 'bg-indigo-50 text-indigo-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  href={`/${loc.slug}`}
                >
                  {loc.loc}
                  {isSelected && <IconCheck />}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
