import React from 'react'
import Image from 'next/image'
import { InRainImage } from '../constant'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Main3 = ({ location }) => {
  const badges = [
    {
      img: '/approved.png',
      sub: 'ISO 9001 : 2015',
      title: 'Certified Company'
    },
    {
      img: '/trophyImg.png',
      sub: 'Solution Provider',
      title: 'Best Industrial'
    },
    {
      img: '/cer-g.jpg',
      sub: null,
      title: 'InRain® Construction Pvt. Ltd.'
    },
    {
      img: '/trophyImg.png',
      sub: 'ISO 14001 : 2015',
      title: 'Certified Company'
    }
  ]
  const router = useRouter()

  async function DynamicRoute (route) {
    if (!router.query.location) {
      router.push(route)
    } else {
      router.push(`/${router.query.location}${route}`)
    }
  }

  return (
    <section className='bg-white'>
      {/* ── Hero Text + Badges ── */}
      <div className='max-w-7xl mx-auto px-5 md:px-10 pt-5 pb-10'>
        <div className='flex flex-col lg:flex-row lg:items-center justify-center lg:gap-10'>
          {/* Left — Text */}
          <div data-aos='fade-up' className='flex-1'>
            <span className='inline-block text-xs font-semibold tracking-widest uppercase text-green-600 mb-3'>
              InRain® Construction Pvt Ltd.
            </span>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 leading-tight'>
              Rainwater Harvesting System{' '}
              <span className='text-green-600'>in {location}</span>
            </h2>

            <div className='mt-2 w-20 h-1 rounded-full bg-green-500' />

            <p className='mt-4 text-gray-900 text-base md:text-lg leading-relaxed text-justify'>
              <span className='text-green-600 font-semibold'>
                InRain<sup>®</sup> Construction Pvt. Ltd.
              </span>{' '}
              is a premier provider of{' '}
              <Link
                target='_blank'
                href='https://www.inrainconstruction.com/'
                className='text-sky-600 hover:text-green-600 font-semibold'
              >
                Rainwater Harvesting Systems in {location}
              </Link>
              , specializing in delivering cutting-edge rainwater harvesting
              solutions tailored to meet the unique needs of our clients.
            </p>
            <p className='mt-4 text-gray-900 text-base md:text-lg leading-relaxed text-justify'>
              We are committed to providing solutions in {location} that not
              only address water scarcity but also help our clients reduce their
              environmental impact through sustainable practices. By continually
              prioritizing innovation and environmental responsibility,{' '}
              <span className='font-semibold'>
                <span className='text-green-600'>
                  InRain<sup>®</sup> Construction
                </span>{' '}
                remains at the forefront of the rainwater harvesting industry,
              </span>{' '}
              helping clients make the most of their water resources while
              fostering a positive impact on the environment.{' '}
              <span className='font-semibold text-gray-900'>
                Our dedication to pioneering innovative solutions, ensuring the
                highest quality standards, and promoting sustainable practices
                has established us as a trusted partner in the rainwater
                harvesting industry.
              </span>
            </p>
          </div>

          {/* Right — Badge Grid */}
          <div
            data-aos='fade-up'
            className='mt-10 lg:mt-0 grid grid-cols-2 items-center justify-center gap-4 shrink-0'
          >
            {badges.map((badge, i) => (
              <div
                key={i}
                className='bg-white border border-green-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center justify-center text-center p-5 w-40 md:w-48'
              >
                <div className='w-14 h-14 flex items-center justify-center mb-3'>
                  <Image
                    alt={badge.title}
                    src={badge.img}
                    height={56}
                    width={56}
                    className='object-contain'
                  />
                </div>
                {badge.sub && (
                  <p className='text-[10px] text-gray-400 uppercase tracking-wide mb-0.5'>
                    {badge.sub}
                  </p>
                )}
                <p className='text-xs md:text-sm font-bold text-gray-800 leading-snug'>
                  {badge.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Full-Width Banner Image ── */}
      <div className='max-w-7xl mx-auto px-5 md:px-10 pb-10'>
        <div className='relative w-full h-28 md:h-56 rounded-2xl overflow-hidden shadow-xl'>
          <Image
            alt='Rainwater Harvesting Banner'
            src='/service7.jpg'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black/40 to-transparent' />
          <div className='absolute inset-0 flex items-center px-8 md:px-14'>
            <p className='text-white text-xl md:text-3xl font-bold max-w-md leading-snug drop-shadow'>
              Sustainable Water Solutions for a Greener Tomorrow
            </p>
          </div>
        </div>
      </div>

      {/* ── Rooftop Section ── */}
      <div className='bg-gray-50 border-t border-gray-100'>
        <div className='max-w-7xl mx-auto px-5 md:px-10 py-6'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:gap-16'>
            {/* Left — Content */}
            <div data-aos='fade-up' className='flex-1'>
              <span className='inline-block text-xs font-semibold tracking-widest uppercase text-green-600 mb-3'>
                InRain<sup>®</sup>
              </span>
              <h2 className='text-2xl md:text-3xl font-bold text-gray-900 leading-tight'>
                Rooftop Rainwater Harvesting System{' '}
                <span className='text-green-600'>in {location}</span>
              </h2>
              <div className='mt-2 w-14 h-1 rounded-full bg-green-500' />

              <p className='mt-4 text-gray-900 text-base md:text-lg leading-relaxed text-justify'>
                We offer a state-of-the-art Rooftop Rainwater Harvesting System
                in {location}, designed for efficient filtration, temporary
                storage, and controlled release. This system is ideal for
                managing wastewater channels and is built using our proprietary
                plastic injection-molded panels. We provide a wide range of
                modular options tailored to suit your specific needs.
              </p>
              <p className='mt-4 text-gray-900 text-base md:text-lg leading-relaxed text-justify'>
                As a leading provider of Rooftop{' '}
                <Link
                  href='https://www.inrainwaterharvesting.com/'
                  target='_blank'
                  className='text-green-600 hover:text-sky-600 font-semibold'
                >
                  Rainwater Harvesting Systems
                </Link>
                , we take pride in delivering top-tier, customized solutions. If
                you're looking for the perfect system to match your
                requirements, feel free to reach out to us for personalized
                options and offers.
              </p>

              <button
                onClick={() => DynamicRoute('/rainwater-harvesting-system')}
                className='animated-button mt-8 bg-white'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='arr-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z' />
                </svg>
                <span className='text'>EXPLORE</span>
                <span className='circle' />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='arr-1'
                  viewBox='0 0 24 24'
                >
                  <path d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z' />
                </svg>
              </button>
            </div>

            {/* Right — Carousel */}
            <div
              data-aos='fade-up'
              className='mt-12 lg:mt-0 shrink-0 w-full max-w-xs md:max-w-sm mx-auto lg:mx-0'
            >
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200'>
                <div className='flex overflow-hidden'>
                  {InRainImage.map((item, i) => (
                    <div key={i} className='carouselAnimation min-w-full'>
                      <Image
                        alt='InRain project'
                        src={item.img}
                        width={400}
                        height={300}
                        className='w-full h-80 object-cover'
                        loading='eager'
                        priority
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
                {/* Decorative green corner accent */}
                <div className='absolute top-0 left-0 w-10 h-10 bg-green-500 rounded-br-2xl opacity-80' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
