import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import React from 'react'
import Image from 'next/image'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Carousel } from '@/components/carousel/carousel'
import Link from 'next/link'
import Metatag from '@/components/SEO/Metatag'
import Schema from '@/components/SEO/Schema'
import BreadcrumbSchema from '@/components/SEO/Breadcrumb'
import Certification from '@/components/Certification/Certification'

const Products = () => {
  const data = {
    title: `Rainwater Harvesting Products | InRain Construction Private Limited, Delhi - India`,
    desc: `Explore InRain® Construction Private Limited for our best Rainwater Harvesting Products. Enquire Now!`,
    keyword: `Rainwater Harvesting Products, Modular Rainwater Harvesting Products, Rainwater Harvesting Installation company, Rainwater Harvesting for Industries`,
    canonical: `https://www.inrainconstruction.in/products`
  }

  const crumb = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `https://www.inrainconstruction.in/`
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Products',
      item: `https://www.inrainconstruction.in/products`
    }
  ]

  const ProductCity = {
    loc: 'Delhi',
    slug: 'products',
    pincode: '110001',
    id: 123
  }

  return (
    <>
      <Metatag data={data} />
      <Schema location={ProductCity} />
      <BreadcrumbSchema location={crumb} />

      <Navbar />
      <main>
        <section
          data-aos='fade-up'
          className='relative mx-5 mt-5 overflow-hidden rounded-3xl shadow-2xl md:mx-10'
        >
          {/* Banner Image */}
          <Image
            src='/service4.jpg'
            alt='Products'
            width={1920}
            height={600}
            priority
            className='h-48 w-full object-cover md:h-80 lg:h-[300px]'
          />

          {/* Overlay */}
          <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent'></div>

          {/* Content */}
          <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-12'>
            <span className='mb-2 text-sm font-semibold uppercase tracking-widest text-green-400'>
              InRain Construction
            </span>

            <h2 className='text-3xl font-bold text-white md:text-5xl lg:text-6xl'>
              Products
            </h2>

            <div className='mt-4 flex items-center text-sm text-white/90 md:text-base'>
              <Link
                href='/'
                className='transition-colors duration-300 hover:text-green-400'
              >
                Home
              </Link>

              <span className='mx-2'>/</span>

              <span className='font-medium'>Products</span>
            </div>
          </div>
        </section>

        <section className='py-10'>
          <div className='mx-auto max-w-7xl px-5 md:px-10'>
            {/* Heading */}
            <div className='mb-10 text-center'>
              <span className='text-sm font-semibold uppercase tracking-widest text-green-600'>
                Our Products
              </span>

              <h1 className='mt-3 text-2xl font-bold text-gray-900 md:text-4xl'>
                Rainwater Harvesting Products
              </h1>

              <div className='mx-auto mt-4 h-1 w-24 rounded-full bg-green-500'></div>
            </div>

            <div className='grid gap-10 lg:grid-cols-3'>
              {/* Product Card */}
              <div className='rounded-3xl bg-white p-6 shadow-xl lg:sticky lg:top-24 h-fit'>
                <div className='text-center'>
                  <span className='inline-block rounded-full bg-green-100 px-4 py-2 text-lg font-bold text-green-700'>
                    InRain<sup>®</sup>
                  </span>

                  <Image
                    src='/product/product1.jpeg'
                    alt='Accident Free Honeycomb Structure'
                    width={600}
                    height={400}
                    className='mt-6 rounded-2xl object-cover transition duration-500 hover:scale-105'
                  />

                  <h3 className='mt-6 text-2xl font-bold text-gray-900'>
                    Accident Free Honeycomb Structure
                  </h3>
                </div>
              </div>

              {/* Features */}
              <div className='lg:col-span-2 grid gap-6 md:grid-cols-2'>
                {/* Card */}
                <div
                  data-aos='fade-up'
                  className='rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl'
                >
                  <h3 className='mb-5 text-xl font-bold text-green-600'>
                    High Void Ratio
                  </h3>

                  <div className='space-y-3'>
                    <div className='flex gap-3'>
                      <ArrowRightAltIcon className='text-green-600' />
                      <p>
                        Reduce the amount of digging and create a large volume
                        of storage in a compact space.
                      </p>
                    </div>

                    <div className='flex gap-3'>
                      <ArrowRightAltIcon className='text-green-600' />
                      <p>As digging is small, post-processing is easy.</p>
                    </div>
                  </div>
                </div>

                {/* Time Saving */}
                <div
                  data-aos='fade-up'
                  className='rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl'
                >
                  <h3 className='mb-5 text-xl font-bold text-green-600'>
                    Time Saving
                  </h3>

                  <div className='space-y-3'>
                    <div className='flex gap-3'>
                      <ArrowRightAltIcon className='text-green-600' />
                      <p>Installation can only be done by hand.</p>
                    </div>

                    <div className='flex gap-3'>
                      <ArrowRightAltIcon className='text-green-600' />
                      <p>
                        Compared to using concrete, there is no need for curing
                        time.
                      </p>
                    </div>

                    <div className='flex gap-3'>
                      <ArrowRightAltIcon className='text-green-600' />
                      <p>
                        No need for heavy equipment, unlikely to use pre-casting
                        concrete products.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Heavy Load */}
                <div
                  data-aos='fade-up'
                  className='rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl'
                >
                  <h3 className='mb-5 text-xl font-bold text-green-600'>
                    Heavy Load Capacity Design
                  </h3>

                  <div className='flex gap-3'>
                    <ArrowRightAltIcon className='text-green-600' />
                    <p>Having a load-bearing strength of up to 46 tons/sqm.</p>
                  </div>
                </div>

                {/* Easy Installation */}
                <div
                  data-aos='fade-up'
                  className='rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl'
                >
                  <h3 className='mb-5 text-xl font-bold text-green-600'>
                    Easy Installation
                  </h3>

                  <div className='flex gap-3'>
                    <ArrowRightAltIcon className='text-green-600' />
                    <p>Installation speed is outstanding.</p>
                  </div>
                </div>

                {/* No Pollution */}
                <div
                  data-aos='fade-up'
                  className='rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl'
                >
                  <h3 className='mb-5 text-xl font-bold text-green-600'>
                    No Pollution
                  </h3>

                  <div className='space-y-3'>
                    <div className='flex gap-3'>
                      <ArrowRightAltIcon className='text-green-600' />
                      <p>Polypropylene is used.</p>
                    </div>

                    <div className='flex gap-3'>
                      <ArrowRightAltIcon className='text-green-600' />
                      <p>
                        Excellent chemical and water-resistant, it does not
                        pollute the water.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Compact Storage */}
                <div
                  data-aos='fade-up'
                  className='rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl'
                >
                  <h3 className='mb-5 text-xl font-bold text-green-600'>
                    Compact Storage
                  </h3>

                  <div className='flex gap-3'>
                    <ArrowRightAltIcon className='text-green-600' />
                    <p>
                      It can be easily stored if piled in the same direction and
                      reduces storage space at the site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-aos='fade-up' className='py-10'>
          <div className='mx-auto max-w-7xl px-5 md:px-10'>
            {/* Product Card */}
            <div className='overflow-hidden rounded-3xl bg-white shadow-2xl'>
              {/* Images */}
              <div className='grid grid-cols-1 gap-1 bg-gray-100 md:grid-cols-2'>
                <div className='group overflow-hidden'>
                  <Image
                    src='/product/product3.png'
                    alt='High Quality Filtration System'
                    width={700}
                    height={450}
                    className='h-72 w-full object-cover transition duration-500 group-hover:scale-105 md:h-96'
                  />
                </div>

                <div className='group overflow-hidden'>
                  <Image
                    src='/product/product4.jpeg'
                    alt='High Quality Filtration System'
                    width={700}
                    height={450}
                    className='h-72 w-full object-cover transition duration-500 group-hover:scale-105 md:h-96'
                  />
                </div>
              </div>

              {/* Title */}
              <div className='border-t border-gray-100 bg-white px-6 py-8 text-center'>
                <span className='rounded-full bg-green-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-green-700'>
                  Product
                </span>

                <h2 className='mt-4 text-2xl font-bold text-gray-900 md:text-4xl'>
                  High Quality Filtration System
                </h2>

                <div className='mx-auto mt-4 h-1 w-20 rounded-full bg-green-500'></div>
              </div>
            </div>
          </div>
        </section>

        <Certification />
        <Carousel />
      </main>
      <Footer />
    </>
  )
}

export default Products
