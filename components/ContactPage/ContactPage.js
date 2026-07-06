import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MailOutline } from '@mui/icons-material'
import CallIcon from '@mui/icons-material/Call'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Link from 'next/link'
import { useState } from 'react'
import Certification from '../Certification/Certification'

const ContactPage = ({ location }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async e => {
    e.preventDefault()

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Something went wrong.')
      setSuccess(true)

      setFormData({
        name: '',
        mobile: '',
        email: '',
        message: ''
      })
    } catch (err) {
      console.log(err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const router = useRouter()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

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
    <main>
      <section
        data-aos='fade-up'
        className='relative mx-5 mt-5 overflow-hidden rounded-3xl shadow-2xl md:mx-10'
      >
        {/* Banner Image */}
        <Image
          src={'/solution_water.jpg'}
          alt='Contact Us'
          width={1000}
          height={200}
          className='h-56 w-full object-cover md:h-80 lg:h-[320px]'
        />

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent'></div>

        {/* Content */}
        <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-12'>
          <span className='mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-green-400'>
            Get In Touch
          </span>

          <h1 className='text-2xl font-bold text-white md:text-4xl lg:text-5xl'>
            Contact Us
          </h1>

          <p className='mt-3 max-w-xl text-sm text-gray-200 md:text-base'>
            We'd love to hear from you. Reach out to our team for rainwater
            harvesting solutions, product enquiries, or project consultations.
          </p>

          {/* Breadcrumb */}
          <div className='mt-6 flex items-center text-sm text-white/90 md:text-base'>
            <Link
              href='/'
              className='transition-colors duration-300 hover:text-green-400'
            >
              Home
            </Link>

            <span className='mx-2'>/</span>

            <span className='font-medium'>Contact Us</span>
          </div>
        </div>
      </section>

      <section className='py-10 bg-gradient-to-b from-white to-gray-50'>
        <div className='mx-auto max-w-5xl px-5 md:px-10'>
          {/* Heading */}
          <div className='text-center mb-14'>
            <span className='uppercase tracking-[0.25em] text-green-600 font-semibold text-sm'>
              Get In Touch
            </span>

            <h2 className='mt-3 text-3xl md:text-5xl font-bold text-gray-900'>
              Contact Us
            </h2>

            <div className='mx-auto mt-4 h-1 w-24 rounded-full bg-green-500'></div>

            <p className='mt-5 text-gray-600 text-lg max-w-3xl mx-auto'>
              The Company has Successfully Installed More than
              <span className='font-semibold text-green-600'>
                {' '}
                4000 Rainwater Harvesting Projects in India.
              </span>
            </p>
          </div>

          <div className='grid gap-10 items-start justify-center lg:grid-cols-2'>
            {/* LEFT */}
            <div data-aos='fade-up'>
              <div className='rounded-3xl bg-white shadow-2xl overflow-hidden'>
                <Image
                  src={'/tree.png'}
                  alt='Rainwater Harvesting'
                  width={200}
                  height={200}
                  className='h-72 md:h-96 w-full object-cover'
                />

                <div className='p-8'>
                  {/* Email */}
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-12 w-12 rounded-full bg-green-100 flex items-center justify-center'>
                      <MailOutline className='text-green-600' />
                    </div>

                    <div>
                      <a
                        href='mailto:mail@inrainconstruction.com'
                        className='text-gray-600 hover:text-green-600 font-semibold transition'
                      >
                        mail@inrainconstruction.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center'>
                      <CallIcon className='text-blue-600' />
                    </div>

                    <div>
                      <a
                        onClick={handleCallClick}
                        href='tel:+919910220794'
                        className='text-gray-600 hover:text-green-600 font-semibold'
                      >
                        +91-9910220794
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className='flex items-center gap-4'>
                    <div className='h-12 w-12 rounded-full bg-red-100 flex items-center justify-center'>
                      <LocationOnIcon className='text-red-500' />
                    </div>

                    <div>
                      <span className='text-gray-600 hover:text-green-600 font-semibold'>
                        {location.loc} - {location.pincode}, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div
              data-aos='fade-up'
              className='rounded-3xl bg-white max-w-md p-8 shadow-2xl'
            >
              <div className='text-center mb-5'>
                <Image
                  src={'/logo.png'}
                  alt='InRain'
                  width={110}
                  height={110}
                  className='mx-auto'
                />

                <h3 className='mt-3 text-2xl font-bold'>Send us a Message</h3>
              </div>

              <form onSubmit={onSubmit} className='space-y-3'>
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-green-500'
                  required
                />

                <input
                  type='tel'
                  name='mobile'
                  placeholder='Phone Number'
                  value={formData.mobile}
                  onChange={handleChange}
                  className='w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-green-500'
                  required
                />

                <input
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-green-500'
                  required
                />

                <textarea
                  rows={5}
                  name='message'
                  placeholder='Write your message...'
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full rounded-xl border border-gray-300 px-5 py-4 outline-none resize-none focus:border-green-500'
                  required
                />

                <button
                  type='submit'
                  disabled={loading}
                  className={`w-full rounded-xl py-4 font-semibold text-white transition-all duration-300
    ${
      loading
        ? 'cursor-not-allowed bg-gray-400'
        : 'bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-[1.02] hover:shadow-xl'
    }`}
                >
                  {loading ? (
                    <span className='flex items-center justify-center gap-3'>
                      <span className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'></span>
                      Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {success && (
        <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4'>
          <div className='w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl'>
            {/* Success Icon */}
            <div className='mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100'>
              <svg
                className='h-12 w-12 text-green-600'
                fill='none'
                stroke='currentColor'
                strokeWidth={3}
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 13l4 4L19 7'
                />
              </svg>
            </div>

            {/* Title */}
            <h2 className='mt-6 text-xl font-bold text-gray-900'>Thank You!</h2>

            {/* Message */}
            <p className='mt-4 text-gray-600 leading-7'>
              Your enquiry has been submitted successfully.
              <br />
              Our team will contact you shortly.
            </p>

            {/* Divider */}
            <div className='my-6 h-px bg-gray-200'></div>

            {/* Buttons */}
            <div className='flex gap-4'>
              <button
                onClick={() => {
                  setSuccess(false)
                }}
                className='flex-1 rounded-xl border border-gray-300 py-3 font-semibold transition hover:bg-gray-100'
              >
                Close
              </button>

              <button
                onClick={() => {
                  router.push('/')
                }}
                className='flex-1 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 py-3 font-semibold text-white transition hover:scale-105'
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}

      <Certification />
    </main>
  )
}

export default ContactPage
