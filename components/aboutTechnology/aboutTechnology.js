import React from 'react'
import Image from 'next/image'

export const AboutTechnology = () => {
  return (
    <section className='py-10'>
      <div className='mx-auto max-w-7xl px-5 md:px-10'>
        {/* Section Heading */}
        <div className='mb-12 text-center'>
          <span
            data-aos='fade-up'
            className='text-sm font-semibold uppercase tracking-widest text-green-600'
          >
            Innovation & Engineering
          </span>

          <h3
            data-aos='fade-up'
            className='mt-3 text-2xl font-bold text-gray-900 md:text-4xl'
          >
            Our Technology
          </h3>

          <div
            data-aos='fade-up'
            className='mx-auto mt-4 h-1 w-24 rounded-full bg-green-500'
          ></div>
        </div>

        {/* Top Row */}
        <div
          data-aos='fade-up'
          className='grid grid-cols-1 gap-6 md:grid-cols-2'
        >
          <div className='group overflow-hidden rounded-3xl shadow-xl'>
            <Image
              src='/Technology/main1.jpg'
              alt='Technology'
              width={800}
              height={500}
              className='h-72 w-full object-cover transition duration-500 group-hover:scale-105'
            />
          </div>

          <div className='group overflow-hidden rounded-3xl shadow-xl'>
            <Image
              src='/Technology/main2.jpeg'
              alt='Technology'
              width={800}
              height={500}
              className='h-72 w-full object-cover transition duration-500 group-hover:scale-105'
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div
          data-aos='fade-up'
          className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-3'
        >
          <div className='group overflow-hidden rounded-3xl shadow-xl'>
            <Image
              src='/Technology/main3.jpg'
              alt='Technology'
              width={500}
              height={350}
              className='h-64 w-full object-cover transition duration-500 group-hover:scale-105'
            />
          </div>

          <div className='group overflow-hidden rounded-3xl shadow-xl'>
            <Image
              src='/Technology/main4.jpg'
              alt='Technology'
              width={500}
              height={350}
              className='h-64 w-full object-cover transition duration-500 group-hover:scale-105'
            />
          </div>

          <div className='group overflow-hidden rounded-3xl shadow-xl'>
            <Image
              src='/Technology/main5.jpg'
              alt='Technology'
              width={500}
              height={350}
              className='h-64 w-full object-cover transition duration-500 group-hover:scale-105'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
