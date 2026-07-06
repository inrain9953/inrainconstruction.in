import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Certification from '../Certification/Certification'

const RWHForIndustries = ({ location }) => {
  return (
    <main className='bg-gradient-to-b from-white via-gray-50 to-white py-10'>
      <section className='mx-auto max-w-7xl px-5 md:px-7'>
        {/* Main Section */}
        <div
          data-aos='fade-up'
          className='grid gap-10 lg:grid-cols-[1fr_380px]'
        >
          {/* Left Content */}
          <div className='rounded-3xl bg-white p-5 md:p-8 shadow-xl'>
            <span className='inline-block rounded-full bg-green-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-green-700'>
              Industrial Water Management
            </span>

            <h1 className='mt-2 text-2xl md:text-4xl font-bold text-gray-900'>
              Rainwater Harvesting System for Industries in{' '}
              <bold className='text-sky-600'>{location.loc}</bold>
            </h1>

            <p className='mt-3 text-base leading-7 text-gray-900'>
              Water scarcity is an increasingly critical issue, particularly for
              industries that rely on water for their operations. With the rise
              in population and industrial activity in {location.loc}, the need
              for sustainable water management has become essential. One method
              gaining significant attention is rainwater harvesting. Though it
              is an ancient practice, it has seen a resurgence in recent years
              due to its potential to address water shortages, reduce dependence
              on traditional water sources, and promote sustainability within
              industrial settings. This article delves into the benefits and
              practical applications of{' '}
              <Link
                href='https://www.inrainconstruction.com/'
                target='_blank'
                className='text-green-500 hover:text-sky-500 font-semibold'
              >
                rainwater harvesting systems for industries
              </Link>
              , along with their role in fostering a sustainable future.
            </p>

            <div className='mt-10'>
              <h2 className='text-2xl font-bold text-gray-900'>
                The Significance of Rainwater Harvesting for Industrial
                Operations
              </h2>

              <p className='mt-3 text-base leading-7 text-gray-900'>
                Rainwater harvesting offers numerous advantages to industries by
                providing an alternative water source, thereby reducing the
                reliance on municipal supplies and groundwater reserves in{' '}
                {location.loc}. Industries often require substantial amounts of
                water for activities such as cooling, cleaning, and production.
                By harnessing rainwater, industries can lessen the burden on
                conventional water sources and create a more resilient water
                supply system.
              </p>

              <p className='mt-2 text-base leading-7 text-gray-900'>
                Additionally, rainwater is typically free of many pollutants
                found in groundwater or surface water, making it ideal for
                various non-potable industrial uses. Its natural softness can
                also decrease the need for water treatment chemicals and reduce
                maintenance expenses related to equipment damage from scaling or
                corrosion.
              </p>
            </div>

            {/* Benefits */}

            <div className='mt-10'>
              <h2 className='text-2xl font-bold text-gray-900'>
                Key Benefits of Rainwater Harvesting for Industries
              </h2>

              <p className='mt-3 text-base text-gray-900'>
                Incorporating{' '}
                <Link
                  href='https://www.inrainwaterharvesting.com/'
                  target='_blank'
                  className='text-green-500 hover:text-sky-500 font-semibold'
                >
                  rainwater harvesting
                </Link>{' '}
                into industrial operations offers several noteworthy benefits:
              </p>

              <div className='mt-6 grid gap-5 md:grid-cols-2'>
                {[
                  {
                    title: 'Water Conservation',
                    text: 'This method reduces the demand for traditional water resources, ensuring their long-term sustainability and availability for other essential purposes.'
                  },
                  {
                    title: 'Cost Efficiency',
                    text: 'By using rainwater for non-potable applications, industries can significantly lower their water bills and reduce dependency on treated municipal water supplies.'
                  },
                  {
                    title: 'Environmental Impact',
                    text: 'Rainwater harvesting helps minimize stormwater runoff, lowering the risks of flooding and soil erosion. It also reduces the environmental strain caused by industrial water extraction from groundwater and surface water sources.'
                  },
                  {
                    title: 'Regulatory Compliance',
                    text: 'In many regions, there are regulations and incentives to promote sustainable water management. By implementing rainwater harvesting, industries can comply with these regulations and capitalize on available incentives.'
                  },
                  {
                    title: 'Operational Resilience',
                    text: 'Having an independent water source makes industries more resilient in the face of supply disruptions caused by droughts, water restrictions, or infrastructure breakdowns.'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className='rounded-2xl border border-green-100 bg-green-50 p-5'
                  >
                    <h3 className='mb-2 text-xl font-bold text-green-700'>
                      {item.title}
                    </h3>

                    <p className='leading-7 text-sm text-gray-900'>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}

          <aside className='lg:sticky lg:top-24 h-fit'>
            <div className='overflow-hidden rounded-3xl bg-white shadow-2xl'>
              <Image
                src='/services/harvesting11.jpg'
                alt='Rainwater Harvesting System for Industries'
                width={500}
                height={700}
                className='w-full object-cover transition duration-700 hover:scale-105'
              />

              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-900'>
                  Industrial Rainwater Harvesting
                </h3>

                <p className='mt-2 text-gray-600 leading-7'>
                  Reliable industrial rainwater harvesting systems engineered to
                  improve operational efficiency while supporting sustainable
                  industrial growth.
                </p>
              </div>
            </div>

            <div className='bg-slate-900 mt-5 text-white rounded-[32px] p-7 shadow-xl'>
              <h4 className='text-xl font-bold mb-3'>
                Need Expert Consultation?
              </h4>

              <p className='text-slate-300 leading-6 text-sm mb-5'>
                Get customized Rainwater Harvesting System for Industries in{' '}
                {location.loc}, designed according to your project requirements.
              </p>

              <Link
                href={`/${location.slug}/contact-us`}
                className='bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-xl font-semibold'
              >
                Get a Quote
              </Link>
            </div>
          </aside>
        </div>

        {/* Why Choose */}

        <div
          data-aos='fade-up'
          className='mt-12 rounded-3xl bg-white p-5 shadow-xl md:p-8'
        >
          <h2 className='text-center text-2xl md:text-4xl font-bold text-gray-900'>
            Why Choose <span className='text-green-600'>InRain®</span>?
          </h2>

          <div className='mt-8 grid gap-6 md:grid-cols-2'>
            {[
              {
                title: 'Expertise',
                text: 'Leveraging our extensive experience in rainwater harvesting, we possess the expertise and skills necessary to develop tailored solutions for various applications and environments. Our team stays abreast of the latest advancements in the industry, enabling us to provide innovative and cutting-edge solutions.'
              },
              {
                title: 'High-profile Clientele',
                text: 'Our successful partnerships with renowned organizations such as HUL, PepsiCo, and Sobha Developers demonstrate our capability to meet the highest standards of quality and reliability. We value our strong client relationships and are committed to consistently exceeding expectations.'
              },
              {
                title: 'In-house Manufacturing',
                text: 'With our own manufacturing facilities for rainwater harvesting modular structures and filters, we retain complete control over the production process. This ensures superior quality, cost-effectiveness, and timely delivery of our products.'
              },
              {
                title: 'Sustainability Focus',
                text: 'We recognize the importance of sustainable practices in addressing water scarcity and protecting the environment. Our solutions are designed to conserve water, support ecological balance, and reduce dependence on external water sources.'
              },
              {
                title: 'Comprehensive Services',
                text: 'InRain Construction offers a full range of services from initial project assessment through installation and ongoing maintenance, ensuring the optimal performance of rainwater harvesting systems. Our dedicated team provides technical support and monitoring services to maintain continued efficiency.'
              },
              {
                title: 'Our Commitment',
                text: 'InRain® is dedicated to transforming water resource management through advanced rainwater harvesting techniques. With our industry expertise, quality manufacturing capabilities, and sustainability-focused approach, we strive to create a greener, more water-efficient future for our clients and communities.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className='rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:-translate-y-1 hover:shadow-lg'
              >
                <h3 className='mb-2 text-2xl font-bold text-gray-900'>
                  {item.title}
                </h3>

                <p className='leading-7 text-gray-600'>{item.text}</p>
              </div>
            ))}
          </div>

          <div className='mt-10 flex justify-center'>
            <Image
              src='/tree.png'
              alt='Rainwater Harvesting'
              width={420}
              height={420}
              className='drop-shadow-2xl'
            />
          </div>
        </div>
      </section>

      <Certification />
    </main>
  )
}

export default RWHForIndustries
