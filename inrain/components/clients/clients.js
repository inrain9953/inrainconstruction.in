import React from 'react'
import Image from 'next/image'
import { clientSlider1, clientSlider2 } from '../constant'

const InfiniteTrack = ({ items, direction = 'left', speed = 30 }) => {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items]
  const animClass = direction === 'left' ? 'scroll-left' : 'scroll-right'

  return (
    <div className='relative overflow-hidden w-full'>
      {/* Left fade */}
      <div className='pointer-events-none absolute left-0 top-0 h-full w-24 md:w-40 z-10 bg-gradient-to-r from-white to-transparent' />
      {/* Right fade */}
      <div className='pointer-events-none absolute right-0 top-0 h-full w-24 md:w-40 z-10 bg-gradient-to-l from-white to-transparent' />

      <div
        className={`flex gap-6 md:gap-8 w-max ${animClass} hover:[animation-play-state:paused]`}
        style={{ '--speed': `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className='flex flex-col items-center w-32 md:w-40 shrink-0 group'
          >
            <div className='relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-md border border-gray-100 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 bg-white'>
              <Image
                alt={item.description || 'client'}
                src={item.img}
                fill
                className='object-contain p-3'
                loading='eager'
                priority
                unoptimized
              />
            </div>
            {item.description && (
              <p className='mt-3 text-center text-xs md:text-sm font-semibold text-gray-700 leading-snug line-clamp-2'>
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .scroll-left {
          animation: scrollLeft var(--speed, 30s) linear infinite;
        }
        .scroll-right {
          animation: scrollRight var(--speed, 30s) linear infinite;
        }
        .scroll-left:hover,
        .scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export const Clients = () => {
  return (
    <section className='mt-10 pb-10 bg-white'>
      {/* Header */}
      <div data-aos='fade-up' className='text-center mb-12 px-5'>
        <span className='inline-block text-xs font-semibold tracking-widest uppercase text-green-600 mb-2'>
          Trusted By Many
        </span>
        <h3 className='text-3xl md:text-4xl font-bold text-gray-900'>
          Our Happy Clients
        </h3>
        <div className='mt-3 mx-auto w-14 h-1 rounded-full bg-green-500' />
      </div>

      {/* Slider rows */}
      <div data-aos='fade-up' className='space-y-8'>
        <InfiniteTrack items={clientSlider1} direction='left' speed={35} />
        <InfiniteTrack items={clientSlider2} direction='right' speed={40} />
      </div>
    </section>
  )
}
