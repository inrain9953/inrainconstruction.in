import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { features } from '../constant'
import RainAnimation from '../Rain/RainAnimation'
import { useRouter } from 'next/router'

export const Main1 = ({ location }) => {
  const router = useRouter()

  async function DynamicRoute (route) {
    if (!router.query.location) {
      router.push(route)
    } else {
      router.push(`/${router.query.location}${route}`)
    }
  }

  return (
    <section className='relative'>
      <RainAnimation />
      <div className='absolute inset-0 z-10 flex flex-col px-4 py-8'>
        {/* TOP CONTENT */}
        <div className='flex items-center justify-center w-full flex-1'>
          <div className='backdrop-blur-sm bg-transparent shadow-2xl rounded-3xl p-6 md:p-10 max-w-4xl w-full text-center md:text-left transition duration-300 hover:scale-[1.01]'>
            {/* Heading */}
            <h1 className='text-2xl md:text-3xl font-bold text-green-900 leading-tight'>
              The Best Rainwater Harvesting System in {location}
            </h1>

            {/* Divider */}
            <div className='w-84 h-1 bg-green-600 rounded-full mt-4 mb-5 mx-auto md:mx-0'></div>

            {/* Subheading */}
            <p className='text-lg md:text-2xl font-semibold text-gray-800 mb-3'>
              Water Conservation & Management Company
            </p>

            {/* Animated Text */}
            <div className='text-sm md:text-lg font-medium text-gray-700 min-h-[48px]'>
              <TypeAnimation
                sequence={[
                  'Atmosphere of Excellence in Water Conservation & Management Technologies',
                  3000
                ]}
                repeat={Infinity}
              />
            </div>

            {/* CTA Buttons */}
            <div className='mt-2 flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
              <button
                onClick={() => DynamicRoute('/products')}
                className='px-6 py-3 bg-green-700 text-white rounded-xl shadow-lg hover:bg-green-800 hover:scale-105 transition-all duration-300'
              >
                Explore Products
              </button>
              <button
                onClick={() => DynamicRoute('/contact-us')}
                className='px-6 py-3 border border-green-700 text-green-800 rounded-xl hover:bg-green-100 hover:scale-105 transition-all duration-300'
              >
                Get Free Site Inspection
              </button>
            </div>

            {/* Trust Line */}
            <p className='text-xs text-gray-600 font-semibold mt-4'>
              4,000+ installations across India
            </p>
          </div>
        </div>

        {/* BOTTOM FEATURES */}
        <div className='w-full'>
          <div className='flex gap-4 overflow-x-auto md:overflow-visible md:flex-wrap md:justify-center pb-2'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='relative min-w-[140px] md:w-40 h-28 md:h-32 rounded-xl overflow-hidden cursor-pointer group shadow-lg flex-shrink-0'
              >
                {/* Image */}
                <Image
                  alt='feature'
                  src={feature.img}
                  fill
                  className='object-cover group-hover:scale-110 transition duration-500'
                  priority
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300'></div>

                {/* Text */}
                <p className='absolute inset-0 flex items-center justify-center text-center text-white text-xs md:text-sm font-semibold px-2 leading-tight'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
