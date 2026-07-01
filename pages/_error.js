import { Navbar } from '@/components/navbar/navbar'
import React from 'react'
import Link from 'next/link'
import { Footer } from '@/components/footer/footer'

const _error = () => {
  return (
    <>
      <Navbar />
      <div className='m-5 md:p-10 md:shadow-2xl rounded-xl'>
        <div className='text-center'>
          <h1 className='text-xl md:text-2xl text-green-500 font-semibold'>
            InRain® Construction Private Limited
          </h1>
          <p className='text-sm'>Water Conservation & Management Company</p>
        </div>

        <div className='mt-5'>
          <h2 className='text-lg font-semibold md:text-xl text-center'>
            Oops! Page Not Found (404)
          </h2>
          <p className='text-sm md:text-lg text-center pt-1'>
            Looks like you’ve taken a wrong turn—this page doesn’t exist or has
            been moved.
          </p>
        </div>

        <div className='mt-5 text-justify'>
          <p className='text-lg md:text-2xl md:text-center'>
            At InRain® Construction Pvt. Ltd., we are all about building
            sustainable solutions, but unfortunately, we couldn't build the page
            you're looking for.
          </p>
        </div>

        <div className='mt-5 md:text-center'>
          <h3 className='text-lg md:text-2xl font-semibold'>
            Here's what you can do:
          </h3>
          <ul className='flex flex-col gap-3 pt-2 text-sm md:text-lg'>
            <li>
              🔹 Go Back to the{' '}
              <Link
                href={'/'}
                className='font-semibold text-green-500 hover:text-sky-500'
              >
                Home Page
              </Link>
            </li>
            <li>
              🔹 Explore Our Services:{' '}
              <Link
                href={'/rainwater-harvesting-system'}
                className='font-semibold text-green-500 hover:text-sky-500'
              >
                Rainwater Harvesting Solutions
              </Link>
            </li>
            <li>
              🔹 Contact Us for any assistance:{' '}
              <Link
                href={'mailto:mail@inrainconstruction.com'}
                className='font-semibold text-green-500 hover:text-sky-500'
              >
                mail@inrainconstruction.com
              </Link>{' '}
              |{' '}
              <Link
                href={'tel:+919910220794'}
                className='font-semibold text-green-500 hover:text-sky-500'
              >
                +91-9910220794
              </Link>
            </li>
          </ul>
        </div>

        <div className='mt-5 text-center'>
          <h3 className='text-xl md:text-2xl font-semibold'>Need Help?</h3>
          <p className='text-sm pt-1 md:text-center md:text-lg'>
            We’re always ready to assist you with Water Conservation, Rainwater
            Harvesting Systems, and Sustainable Solutions.
          </p>
        </div>

        <div className='mt-5 text-center'>
          <h4 className='text-2xl font-semibold text-sky-500'>
            {' '}
            Let’s make every drop count!
          </h4>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default _error
