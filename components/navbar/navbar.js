import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import LocationDropdown from '../LocationDropdown'
import MobileSidebar from './Sidebar'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { useRouter } from 'next/router'

// Icons
const IconHome = () => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z' />
    <polyline points='9 21 9 12 15 12 15 21' />
  </svg>
)
const IconBox = () => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' />
  </svg>
)
const IconMail = () => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='4' width='20' height='16' rx='2' />
    <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
  </svg>
)
const IconMenu = () => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='4' y1='6' x2='20' y2='6' />
    <line x1='4' y1='12' x2='20' y2='12' />
    <line x1='4' y1='18' x2='20' y2='18' />
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
    className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
  >
    <polyline points='6 9 12 15 18 9' />
  </svg>
)

export const Navbar = () => {
  const NAV_LINKS = [
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

  const [openDropdown, setOpenDropdown] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Home')
  const [selectedCity, setSelectedCity] = useState(null)
  const dropdownRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    if (!router.query) return
    if (router.pathname.includes('products')) {
      setActiveTab('Products')
    }
    if (router.pathname.includes('contact')) {
      setActiveTab('Contact')
    }
  }, [router])

  const handleDropdown = label =>
    setOpenDropdown(prev => (prev === label ? null : label))

  const BOTTOM_TABS = [
    { label: 'Home', href: '/', icon: <IconHome /> },
    { label: 'Products', href: '/products', icon: <IconBox /> },
    { label: 'Contact', href: '/contact-us', icon: <IconMail /> },
    { label: 'Menu', icon: <IconMenu /> }
  ]

  async function DynamicRoute (route) {
    if (!router.query.location) {
      router.push(route)
    } else {
      router.push(`/${router.query.location}${route}`)
    }
  }

  const handleWhatsAppClick = async () => {
    window.open('https://wa.me/919910220794', '_blank')
    try {
      await fetch('/api/track-whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          page: window.location.pathname
        })
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {/* ── Desktop/Mobile Navbar ── */}
      <nav className='sticky top-0 z-50' ref={dropdownRef}>
        <div className='flex items-center justify-between md:px-8 px-4 h-20 bg-white border-b border-gray-200 shadow-sm'>
          {/* Logo */}
          <Link href='/' className='tracking-tight text-gray-900 no-underline'>
            <Image
              src='/logo.png'
              width={100}
              height={100}
              className='w-20 h-16'
            />
          </Link>

          {/* Nav Links */}
          <ul className='hidden md:flex items-center gap-1 list-none m-0 p-0'>
            {NAV_LINKS.map(link => (
              <li key={link.label} className='relative'>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdown(link.label)}
                      aria-expanded={openDropdown === link.label}
                      className={`flex items-center gap-1 px-3.5 py-2 text-md font-medium rounded-lg border-none cursor-pointer transition-colors duration-150
                      ${
                        openDropdown === link.label
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'bg-transparent text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                      }`}
                    >
                      {link.label}
                      <IconChevron open={openDropdown === link.label} />
                    </button>

                    {openDropdown === link.label && (
                      <div className='absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-xl shadow-lg min-w-[180px] overflow-hidden z-50 animate-[dropIn_0.18s_ease]'>
                        <style>{`
                        @keyframes dropIn {
                          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
                          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
                        }
                      `}</style>
                        {link.dropdown.map((item, i) => (
                          <p
                            key={item.label}
                            onClick={() => DynamicRoute(item.href)}
                            className={`block px-4 py-2.5 text-sm text-gray-700 cursor-pointer no-underline transition-colors duration-100 hover:bg-indigo-50 hover:text-indigo-600
                            ${i !== 0 ? 'border-t border-gray-100' : ''}`}
                          >
                            {item.label}
                          </p>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <p
                    onClick={() => DynamicRoute(link.href)}
                    className='flex items-center cursor-pointer gap-1 px-3.5 py-2 text-md font-medium text-gray-600 rounded-lg no-underline transition-colors duration-150 hover:bg-indigo-50 hover:text-indigo-600'
                  >
                    {link.label}
                  </p>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={handleWhatsAppClick}
            className='px-5 py-2 flex justify-center items-center gap-1 bg-green-500 text-white text-sm font-semibold rounded-lg no-underline transition-all duration-150 hover:bg-green-600 hover:-translate-y-px'
          >
            <WhatsAppIcon /> Chat With Us
          </button>
        </div>
        <LocationDropdown onSelect={loc => setSelectedCity(loc)} />
      </nav>

      {/* ── Mobile Bottom Nav ── */}
      <nav className='md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 shadow-[0_-2px_16px_rgba(0,0,0,0.08)] z-50 px-2'>
        <div className='flex justify-around items-center h-full'>
          {BOTTOM_TABS.map(({ label, icon, href }) => (
            <button
              key={label}
              onClick={() => {
                setActiveTab(label)
                if (label === 'Menu') return setSidebarOpen(true)
                DynamicRoute(href)
              }}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-2 border-none bg-transparent cursor-pointer text-[0.65rem] font-medium rounded-xl transition-colors duration-150
                ${
                  activeTab === label
                    ? 'text-indigo-500'
                    : 'text-gray-400 hover:text-indigo-500'
                }`}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Sidebar Overlay ── */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className='md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] animate-[fadeIn_0.2s_ease]'
        >
          <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
        </div>
      )}

      {/* ── Sidebar ── */}
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </>
  )
}
