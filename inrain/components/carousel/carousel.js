import React from 'react'
import Image from 'next/image'
import { carouselSlider } from '../constant'

export const Carousel = () => {
  return (
    <section className='py-10 bg-gradient-to-b from-white to-gray-50'>
      <div className='mx-auto max-w-7xl px-5 md:px-10'>
        {/* Heading */}
        <div className='mb-8 text-center'>
          <span className='text-sm font-semibold uppercase tracking-widest text-green-600'>
            Our Workflow
          </span>

          <h2 className='mt-3 text-xl font-bold text-gray-900 md:text-3xl'>
            Rainwater Harvesting Installation Process
          </h2>

          <div className='mx-auto mt-4 h-1 w-24 rounded-full bg-green-500'></div>
        </div>

        {/* Process Slider */}
        <div
          data-aos='fade-up'
          className='flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory'
        >
          {carouselSlider.map((items, index) => (
            <div
              key={index}
              className='group carouselAnimation relative min-w-[190px] md:min-w-[250px] snap-center rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'
            >
              {/* Step Number */}
              <div className='absolute left-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white shadow-lg'>
                {index + 1}
              </div>

              {/* Image */}
              <div className='overflow-hidden rounded-t-3xl'>
                <Image
                  src={items.img}
                  alt='Rainwater Harvesting Process'
                  width={500}
                  height={350}
                  loading='eager'
                  priority
                  unoptimized
                  className='md:h-72 h-52 w-full object-cover transition duration-500 group-hover:scale-105'
                />
              </div>

              {/* Description */}
              <div className='p-6'>
                <p className='text-center text-lg font-semibold leading-7 text-gray-800'>
                  {items.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
