import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import React from 'react'
import Image from 'next/image'
import { AboutContent } from '@/components/constant'
import { AboutTechnology } from '@/components/aboutTechnology/aboutTechnology'
import Link from 'next/link'
import Metatag from '@/components/SEO/Metatag'
import Schema from '@/components/SEO/Schema'
import BreadcrumbSchema from '@/components/SEO/Breadcrumb'

const About = () => {
  const city = { loc: 'Delhi', slug: '', pincode: '110001', id: 7 }

  const data = {
    title: 'About Us | InRain Construction Private Limited -  Delhi, India',
    desc: 'About InRain® Construction Private Limited. Enquire Now!',
    keyword:
      'Rainwater Harvesting System, Modular Rainwater Harvesting, Rainwater Harvesting Installation company, Rainwater Harvesting for Industries',
    canonical: 'https://www.inrainconstruction.in/about'
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
      name: 'About Us',
      item: `https://www.inrainconstruction.in/about`
    }
  ]
  return (
    <>
      <Metatag data={data} />
      <Schema location={city} />
      <BreadcrumbSchema location={crumb} />
      <Navbar />

      <section className='relative mx-4 md:mx-10 mt-5 overflow-hidden rounded-2xl shadow-2xl'>
        {/* Banner Image */}
        <Image
          src='/banner4.jpg'
          alt='Save Water Banner'
          width={1920}
          height={600}
          priority
          className='w-full h-48 md:h-80 object-cover'
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/40'></div>

        {/* Content */}
        <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-12'>
          <h1 className='text-white text-3xl md:text-5xl font-bold mb-2'>
            About Us
          </h1>

          <p className='text-white/90 text-sm md:text-lg'>
            <Link
              href='/'
              className='hover:text-green-400 transition-colors duration-300'
            >
              Home
            </Link>
            <span className='mx-2'>/</span>
            <span>About Us</span>
          </p>
        </div>
      </section>

      <section className='px-5 py-10 md:px-10 lg:px-20'>
        <div className='mx-auto max-w-7xl'>
          {/* Heading */}
          <div className='mb-8 text-center'>
            <span className='text-sm font-semibold uppercase tracking-widest text-green-600'>
              About InRain Construction Private Limited
            </span>

            <h2 className='mt-3 text-2xl font-bold text-gray-900 md:text-4xl'>
              The Best Rainwater Harvesting Company
            </h2>

            <div className='mx-auto mt-4 h-1 w-24 rounded-full bg-green-500'></div>
          </div>

          {/* Content Section */}
          <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
            {/* Text Content */}
            <div className='lg:col-span-2'>
              <div className='rounded-2xl bg-white p-6 shadow-xl md:p-10'>
                <p className='text-justify text-gray-900 leading-7 text-base'>
                  At{' '}
                  <span className='font-semibold text-green-600'>
                    InRain<sup>®</sup> Construction Pvt. Ltd.
                  </span>
                  , we excel in harnessing the potential of water through
                  innovative and advanced water harvesting solutions.{' '}
                  <span className='font-semibold text-gray-900'>
                    Our mission is to help clients maximize their water
                    resources while promoting environmental conservation
                  </span>
                  . By offering comprehensive services, we empower our clients
                  to implement sustainable water management practices
                  effectively.
                  <br />
                  <br />
                  Our journey began with a vision to address the growing water
                  scarcity issues and make a positive environmental impact. Over
                  the years, we have refined our techniques and expanded our
                  expertise, enabling us to deliver tailored solutions that
                  cater to the specific needs of each client. Our dedication to
                  quality and sustainability has earned us a trusted reputation
                  in the industry.
                  <br />
                  <br />
                  The design phase is critical, as it involves creating
                  customized systems that align with the client’s goals and site
                  conditions. We use advanced modeling and simulation tools to
                  optimize the design, ensuring maximum water collection and
                  efficiency.{' '}
                  <span className='font-semibold text-gray-900'>
                    Our systems are not only functional but also aesthetically
                    pleasing, seamlessly integrating with the existing
                    infrastructure.
                  </span>
                  <br />
                  <br />
                  Our experienced specialists handle installation, utilizing the
                  latest water harvesting techniques. We use high-quality
                  materials and equipment to ensure the durability and
                  reliability of our systems. The installation process is
                  streamlined to minimize disruption to the client’s operations
                  and ensure timely project completion.
                  <br />
                  <br />
                  One of our significant achievements is the{' '}
                  <span className='font-semibold text-gray-900'>
                    successful installation of over 4000+ Rainwater Harvesting
                    (RWH) systems
                  </span>{' '}
                  for a diverse range of esteemed clients. A few of our striking
                  clients include{' '}
                  <span className='font-semibold text-gray-900'>
                    Tata | PepsiCo | Hindustan Unilever | Denso | Fujita |
                    Ahresty | Supreme Pipes | Mittal Construction Company | GLS
                    Infra | PWD | Airport terminals | Smart Cities | Supreme
                    Court Judges' Bungalows
                  </span>
                  . These ventures have not only made a difference in helping
                  our clients optimize their water assets, but they have also
                  contributed to noteworthy natural benefits.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className='lg:sticky lg:top-24 h-fit'>
              <div className='overflow-hidden rounded-2xl bg-white shadow-2xl'>
                <Image
                  src='/InRain/rain2.jpg'
                  alt='Modular Rainwater Harvesting'
                  width={600}
                  height={800}
                  className='h-full w-full object-cover transition duration-500 hover:scale-105'
                />
              </div>

              <div className='mt-5 rounded-2xl bg-green-50 p-6 shadow-lg'>
                <h3 className='text-lg font-semibold text-green-700'>
                  Our Impact
                </h3>

                <p className='mt-2 text-gray-700'>
                  4000+ Rainwater Harvesting Systems Successfully Installed
                  Across Industries, Government Institutions, Smart Cities &
                  Residential Projects in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-5 py-10 md:px-10'>
        <div className='mx-auto max-w-7xl'>
          {/* Section Header */}
          <div className='mb-8 text-center'>
            <span className='text-sm font-semibold uppercase tracking-wider text-green-600'>
              Watch Our Process
            </span>

            <h2 className='mt-2 text-2xl font-bold text-gray-900 md:text-4xl'>
              Modular Rainwater Harvesting Process
            </h2>

            <div className='mx-auto mt-4 h-1 w-24 rounded-full bg-green-500'></div>
          </div>

          {/* Video Card */}
          <div className='overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]'>
            <div className='bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-4'>
              <h3 className='text-lg font-semibold text-white'>
                InRain Construction Pvt. Ltd.
              </h3>
              <p className='mt-1 text-sm text-green-100'>
                Learn how our rainwater harvesting solutions are creating a
                sustainable future.
              </p>
            </div>

            {/* Responsive Video */}
            <div className='relative aspect-video w-full'>
              <iframe
                className='absolute inset-0 h-full w-full'
                title='Youtube Video Player'
                src='https://www.youtube.com/embed/3DyJAcKe0OM'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture web-share clipboard-write'
                frameBorder='0'
                allowFullScreen
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='px-5 py-10 md:px-10 lg:px-20'>
        <div className='mx-auto max-w-7xl'>
          {/* Heading */}
          <div className='mb-8 text-center'>
            <h2 className='mt-3 text-2xl font-bold text-gray-900 md:text-4xl'>
              About Us
            </h2>

            <div className='mx-auto mt-4 h-1 w-24 rounded-full bg-green-500'></div>
          </div>

          {/* Content */}
          <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
            {/* Left Content */}
            <div className='lg:col-span-2'>
              <div className='rounded-3xl bg-white p-6 shadow-xl md:p-10'>
                <div className='space-y-6 text-justify text-base text-gray-900 leading-7'>
                  <div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900 md:text-2xl'>
                      Expertise
                    </h3>
                    <p>
                      With years of experience in rainwater harvesting, we have
                      developed the expertise and skills necessary to create
                      customized solutions for a variety of applications and
                      environments. Our team stays up-to-date with the latest
                      industry advancements, allowing us to offer innovative and
                      cutting-edge solutions.
                    </p>
                  </div>

                  <div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900 md:text-2xl'>
                      High-profile Clientele
                    </h3>
                    <p>
                      Our successful collaborations with respected organizations
                      such as HUL, PepsiCo, and Sobha Developers showcase our
                      ability to meet the highest standards of quality and
                      reliability. We value our strong client relationships and
                      are committed to consistently exceeding their
                      expectations.
                    </p>
                  </div>

                  <div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900 md:text-2xl'>
                      In-house Manufacturing
                    </h3>
                    <p>
                      By operating our own manufacturing facilities for modular
                      rainwater harvesting structures and filters, we maintain
                      full control over the production process. This ensures
                      superior quality, cost efficiency, and timely delivery of
                      our products.
                    </p>
                  </div>

                  <div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900 md:text-2xl'>
                      Sustainability Focus
                    </h3>
                    <p>
                      We understand the critical role sustainable practices play
                      in tackling water scarcity and protecting the environment.
                      Our solutions are designed to conserve water, promote
                      ecological balance, and reduce reliance on external water
                      sources.
                    </p>
                  </div>

                  <div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900 md:text-2xl'>
                      Comprehensive Services
                    </h3>
                    <p>
                      At InRain Construction, we offer a complete range of
                      services, from initial project evaluation to installation
                      and ongoing maintenance, ensuring the peak performance of
                      rainwater harvesting systems. Our dedicated team provides
                      technical support and monitoring to sustain long-term
                      efficiency.
                    </p>
                  </div>

                  <div className='rounded-2xl border-l-4 border-green-500 bg-green-50 p-5'>
                    <p className='text-gray-800'>
                      InRain Construction Private Limited is committed to
                      revolutionizing water resource management through advanced
                      rainwater harvesting techniques. Combining industry
                      expertise, top-tier manufacturing capabilities, and a
                      focus on sustainability, we aim to create a greener, more
                      water-efficient future for our clients and communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Image */}
            <div className='flex items-center justify-center lg:sticky lg:top-24'>
              <div className='relative'>
                {/* Decorative Background */}
                <div className='absolute inset-0 scale-110 rounded-full bg-green-100 blur-3xl'></div>

                <Image
                  data-aos='zoom-in-up'
                  src='/tree.png'
                  alt='Environmental Sustainability'
                  width={500}
                  height={500}
                  className='relative z-10 w-64 md:w-80 lg:w-full drop-shadow-2xl transition duration-500 hover:scale-105'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutTechnology />

      <section className='py-10'>
        {/* Banner */}
        <div className='mx-5 md:mx-10'>
          <div className='overflow-hidden rounded-3xl shadow-2xl'>
            <Image
              src='/service2.jpg'
              alt='Rainwater Harvesting Services'
              width={1600}
              height={600}
              className='h-30 w-full object-cover md:h-80'
            />
          </div>
        </div>

        {/* Features Section */}
        <div className='mx-auto mt-12 max-w-7xl px-5 md:px-10'>
          <div className='mb-10 text-center'>
            <span className='text-sm font-semibold uppercase tracking-widest text-green-600'>
              Our Strengths
            </span>

            <h2 className='mt-2 text-2xl font-bold text-gray-900 md:text-4xl'>
              Why Choose InRain?
            </h2>

            <div className='mx-auto mt-4 h-1 w-24 rounded-full bg-green-500'></div>
          </div>

          <div className='grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6'>
            {AboutContent.map((item, index) => (
              <div
                key={index}
                data-aos='fade-up'
                className='group flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-sky-600 bg-sky-200 p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-2xl'
              >
                <div className='mb-4 rounded-full bg-green-50 p-4 transition-all duration-300 group-hover:bg-green-100'>
                  <Image
                    src='/renewable-energy.png'
                    alt='Renewable Energy'
                    width={40}
                    height={40}
                    className='object-contain'
                  />
                </div>

                <p className='font-semibold text-gray-800 leading-6'>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About
