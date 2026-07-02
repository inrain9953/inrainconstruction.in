import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { MailOutline } from '@mui/icons-material'
import CallIcon from '@mui/icons-material/Call'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Clients } from '../clients/clients'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Location } from '../LocationDropdown'

export const Footer = () => {
  const router = useRouter()
  const [selected, setSelected] = useState(null)
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Product', href: '/products' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Blogs', href: '/blogs' }
  ]

  async function DynamicRoute (route) {
    if (!router.query.location) {
      router.push(route)
    } else if (route === '/blogs') {
      router.push('/blogs')
    } else {
      router.push(`/${router.query.location}${route}`)
    }
  }

  const Solution_Links = [
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

  const socials = [
    {
      icon: <FacebookIcon fontSize='small' />,
      href: 'https://www.facebook.com/p/InRain-Construction-Pvt-Ltd-100084454944911/?_rdr',
      label: 'Facebook'
    },
    {
      icon: <InstagramIcon fontSize='small' />,
      href: 'https://www.instagram.com/inrainconstruction_icpl/',
      label: 'Instagram'
    },
    {
      icon: <XIcon fontSize='small' />,
      href: 'https://x.com/InrainC',
      label: 'X'
    },
    {
      icon: <LinkedInIcon fontSize='small' />,
      href: 'https://www.linkedin.com/company/35590476/admin/dashboard/',
      label: 'LinkedIn'
    },
    {
      icon: <YouTubeIcon fontSize='small' />,
      href: 'https://youtube.com/@inrainharvesting?si=Fxx_8_rhzHt2ZBLF',
      label: 'YouTube'
    }
  ]

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

  const handleCallClick = async () => {
    try {
      await fetch('/api/track-call', {
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
      <Clients />
      <footer className='bg-gradient-to-br from-green-700 to-green-800'>
        {/* Top divider accent */}
        <div className='h-1 w-full bg-gradient-to-r from-green-400 via-white/30 to-green-400' />

        <div className='max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* ── Column 1: Social ── */}
            <div data-aos='fade-up'>
              {/* Brand mark */}
              <p className='text-white/60 text-xs font-semibold tracking-widest uppercase mb-1'>
                Follow Us
              </p>
              <h3 className='text-xl font-bold text-white mb-5'>
                Our Social Links
              </h3>

              <div className='flex items-center gap-3 flex-wrap'>
                {socials.map(({ icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target='_blank'
                    aria-label={label}
                  >
                    <span className='flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-green-700 text-white transition-all duration-200'>
                      {icon}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Short tagline */}
              <p className='mt-6 text-white/60 text-sm leading-relaxed'>
                Pioneering sustainable rainwater harvesting solutions across
                India.
              </p>
            </div>

            {/* ── Column 2: Quick Links ── */}
            <div data-aos='fade-up'>
              <p className='text-white/60 text-xs font-semibold tracking-widest uppercase mb-1'>
                Navigate
              </p>
              <h3 className='text-xl font-bold text-white mb-5'>Quick Links</h3>
              <ul className='space-y-2'>
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <span
                      onClick={() => DynamicRoute(href)}
                      className='group flex items-center gap-2 cursor-pointer text-white/80 hover:text-white text-sm font-medium transition-colors duration-150 no-underline'
                    >
                      <span className='w-1.5 h-1.5 rounded-full bg-green-300 group-hover:bg-white transition-colors duration-150 shrink-0' />
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 3: Products ── */}
            <div data-aos='fade-up'>
              <p className='text-white/60 text-xs font-semibold tracking-widest uppercase mb-1'>
                What We Offer
              </p>
              <h3 className='text-xl font-bold text-white mb-5'>
                Our Products
              </h3>
              <ul className='space-y-2'>
                {Solution_Links.map(({ label, href }) => (
                  <li key={label}>
                    <span
                      onClick={() => DynamicRoute(href)}
                      className='group flex items-start cursor-pointer gap-1.5 text-white/80 hover:text-white text-xs transition-all duration-150 no-underline hover:tracking-wide'
                    >
                      <ArrowRightAltIcon
                        fontSize='small'
                        className='shrink-0 mt-0.5 text-green-300 group-hover:text-white group-hover:translate-x-0.5 transition-transform duration-150'
                      />
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 4: Office ── */}
            <div data-aos='fade-up'>
              <p className='text-white/60 text-xs font-semibold tracking-widest uppercase mb-1'>
                Find Us
              </p>
              <h3 className='text-xl font-bold text-white mb-5'>Our Office</h3>

              <ul className='space-y-2'>
                {/* Address */}
                <li className='flex items-center font-semibold gap-3'>
                  <span className='mt-0.5 shrink-0 text-green-300'>
                    <LocationOnIcon fontSize='small' />
                  </span>
                  <span className='text-white/80 hover:text-white text-sm leading-relaxed no-underline transition-colors duration-150'>
                    {selected?.loc || 'India'} - {selected?.pincode || '110001'}
                    , India
                  </span>
                </li>

                {/* Email */}
                <li className='flex items-center gap-3'>
                  <span className='shrink-0 text-green-300'>
                    <MailOutline fontSize='small' />
                  </span>
                  <a
                    href='mailto:mail@inrainconstruction.com'
                    className='text-white/80 hover:text-white text-sm no-underline transition-colors duration-150 break-all'
                  >
                    mail@inrainconstruction.com
                  </a>
                </li>

                {/* Phone 1 */}
                <li className='flex items-center gap-3'>
                  <span className='shrink-0 text-green-300'>
                    <CallIcon fontSize='small' />
                  </span>
                  <a
                    onClick={handleCallClick}
                    href='tel:+919953070003'
                    className='text-white/80 hover:text-white text-sm no-underline transition-colors duration-150'
                  >
                    +91-9953070003
                  </a>
                </li>

                {/* Phone 2 */}
                <li className='flex items-center gap-3'>
                  <span className='shrink-0 text-green-300'>
                    <CallIcon fontSize='small' />
                  </span>
                  <a
                    onClick={handleCallClick}
                    href='tel:+919910220794'
                    className='text-white/80 hover:text-white text-sm no-underline transition-colors duration-150'
                  >
                    +91-9910220794
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className='border-t border-white/10'>
          <div className='max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-center gap-2'>
            <p className='text-white/50 text-xs text-center sm:text-left'>
              © Copyright 2026 InRain® Construction Pvt. Ltd. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
