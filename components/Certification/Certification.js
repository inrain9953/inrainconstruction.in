import Image from 'next/image'
import React from 'react'

const Certification = () => {
  return (
    <section className='py-10 bg-gradient-to-b overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-10'>
        {/* Header */}
        <div className='text-center mb-10'>
          <span className='inline-flex items-center rounded-full bg-sky-100 text-sky-700 px-4 py-2 text-sm font-semibold mb-2'>
            InRain® Certifications
          </span>

          <h3 className='text-2xl md:text-4xl font-bold text-gray-900'>
            Explore Our Certificates
          </h3>

          <p className='text-gray-500 text-base md:text-md mt-2 max-w-2xl mx-auto'>
            Certifications that reflect our commitment to quality,
            sustainability, innovation, and environmental excellence.
          </p>
        </div>

        {/* Certificates Layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6'>
          {/* ISO 1 */}
          <div className='lg:col-span-3 group overflow-hidden shadow-lg border-black border-4 hover:shadow-2xl'>
            <div className='overflow'>
              <Image
                src='/Certificates/iso1.jpg'
                alt='certification'
                width={700}
                height={400}
                className='w-full object-cover p-1'
              />
            </div>
          </div>

          {/* ISO 2 */}
          <div className='lg:col-span-3 group overflow-hidden shadow-lg border-black border-4 hover:shadow-2xl'>
            <div className='overflow-hidden'>
              <Image
                src='/Certificates/iso2.jpg'
                alt='certification'
                width={400}
                height={700}
                className='w-full object-cover p-1'
              />
            </div>
          </div>

          {/* IGBC (center large card) */}
          <div className='lg:col-span-3 group overflow-hidden shadow-lg border-black border-4 hover:shadow-2xl'>
            <div className='overflow-hidden'>
              <Image
                src='/Certificates/igbc_certificate.jpg'
                alt='certification'
                width={600}
                height={500}
                className='w-full object-cover p-1'
              />
            </div>
          </div>

          {/* GRIHA */}
          <div className='lg:col-span-3 group overflow-hidden shadow-lg border-black border-4 hover:shadow-2xl'>
            <div className='overflow-hidden'>
              <Image
                src='/Certificates/griha.jpg'
                alt='certification'
                width={400}
                height={700}
                className='w-full object-cover p-1'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certification
