import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Location } from '../LocationDropdown'
import { useRouter } from 'next/router'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { MailOutline } from '@mui/icons-material'
import CallIcon from '@mui/icons-material/Call'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

// ── Icons ──────────────────────────────────────────────────────────────────
const IconClose = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
)

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
    className={`transition-transform duration-200 ml-auto shrink-0 ${
      open ? 'rotate-180' : ''
    }`}
  >
    <polyline points='6 9 12 15 18 9' />
  </svg>
)

const IconDot = () => (
  <span className='w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0' />
)

// ── Data ───────────────────────────────────────────────────────────────────
const SIDEBAR_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  {
    label: 'Solutions',
    href: '#',
    dropdown: [
      {
        label: 'Rainwater Harvesting System',
        href: '/rainwater-harvesting-system'
      },
      {
        label: 'Modular Rainwater Harvesting System',
        href: '/modular-rainwater-harvesting-system'
      },
      {
        label: 'Rainwater Harvesting System for Industries',
        href: '/rainwater-harvesting-system-for-industries'
      }
    ]
  },
  { label: 'Contact', href: '/contact-us' }
]

// ── Component ──────────────────────────────────────────────────────────────
export default function MobileSidebar ({ sidebarOpen, setSidebarOpen }) {
  const [openDropdown, setOpenDropdown] = useState(null)
  const router = useRouter()
  const [selected, setSelected] = useState(null)

  const toggle = label =>
    setOpenDropdown(prev => (prev === label ? null : label))

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
  }, [router.query])

  async function DynamicRoute (route) {
    if (!router.query.location) {
      router.push(route)
    } else {
      router.push(`/${router.query.location}${route}`)
    }
  }

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300
          ${
            sidebarOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
      />
      <aside
        className={`md:hidden fixed top-0 left-0 right-0 bottom-16 bg-white z-[70]
          flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* ── Header ── */}
        <div className='flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0'>
          <Image
            onClick={() => {
              DynamicRoute('/')
              setSidebarOpen(false)
            }}
            src='/logo.png'
            alt='logo'
            width={100}
            height={100}
          />
          <button
            onClick={() => setSidebarOpen(false)}
            className='w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 text-gray-500 rounded-xl border-none cursor-pointer transition-colors duration-150'
          >
            <IconClose />
          </button>
        </div>

        {/* ── Scrollable Nav Links ── */}
        <nav className='flex-1 overflow-y-auto px-4 py-4'>
          <div className='flex flex-col gap-0.5'>
            {SIDEBAR_LINKS.map(link => {
              const hasDropdown = !!link.dropdown
              const isOpen = openDropdown === link.label

              return (
                <div key={link.label}>
                  {hasDropdown ? (
                    <>
                      {/* Expandable trigger */}
                      <button
                        onClick={() => {
                          toggle(link.label)
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-[0.95rem] font-medium transition-colors duration-150 border-none cursor-pointer
                          ${
                            isOpen
                              ? 'bg-indigo-50 text-indigo-600'
                              : 'bg-transparent text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                          }`}
                      >
                        {link.label}
                        <IconChevron open={isOpen} />
                      </button>

                      {/* Accordion body */}
                      <div
                        className='overflow-hidden transition-all duration-300 ease-in-out'
                        style={{
                          maxHeight: isOpen
                            ? `${link.dropdown.length * 56}px`
                            : '0px'
                        }}
                      >
                        <div className='ml-4 mt-1 mb-2 pl-4 border-l-2 border-indigo-100 flex flex-col gap-0.5'>
                          {link.dropdown.map(item => (
                            <span
                              key={item.label}
                              onClick={() => {
                                DynamicRoute(item.href)
                                setSidebarOpen(false)
                              }}
                              className='flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-gray-600 font-medium no-underline transition-colors duration-150 hover:bg-indigo-50 hover:text-indigo-600'
                            >
                              <IconDot />
                              {item.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <span
                      onClick={() => {
                        DynamicRoute(link.href)
                        setSidebarOpen(false)
                      }}
                      className='flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-700 text-[0.95rem] font-medium no-underline transition-colors duration-150 hover:bg-gray-50 hover:text-indigo-600'
                    >
                      {link.label}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </nav>

        <div className='m-5 p-2 bg-gray-200 rounded-xl'>
          <ul className='space-y-4'>
            {/* Email */}
            <li className='flex items-center gap-2 font-semibold'>
              <span className='shrink-0'>
                <MailOutline fontSize='small' />
              </span>
              <a
                href='mailto:mail@inrainconstruction.com'
                className=' text-sm no-underline transition-colors duration-150 break-all'
              >
                mail@inrainconstruction.com
              </a>
            </li>

            {/* Phone 1 */}
            <li className='flex items-center gap-2 font-semibold'>
              <span className='shrink-0'>
                <CallIcon fontSize='small' />
              </span>
              <a
                href='tel:+919910220794'
                className='text-sm no-underline transition-colors duration-150'
              >
                +91-9910220794
              </a>
            </li>

            {/* Address */}
            <li className='flex items-center font-semibold gap-2'>
              <span className='mt-0.5 shrink-0'>
                <LocationOnIcon fontSize='small' />
              </span>
              <span className=' text-sm leading-relaxed no-underline transition-colors duration-150'>
                {selected?.loc || 'India'} - {selected?.pincode || '110001'},
                India
              </span>
            </li>
          </ul>
        </div>

        {/* ── Footer CTA ── */}
        <div className='shrink-0 px-4 pb-5 pt-3 border-t border-gray-100'>
          <a
            href='tel:+919910220794'
            className='text-center flex justify-center items-center gap-2 py-3.5 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold text-sm rounded-xl no-underline transition-colors duration-150'
          >
            <CallIcon /> Call Now
          </a>
        </div>
      </aside>
    </>
  )
}
