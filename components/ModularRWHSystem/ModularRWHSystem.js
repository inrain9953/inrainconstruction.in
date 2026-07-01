import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ModularRWHSystem = ({ location }) => {
  return (
    <main className='py-10 bg-gradient-to-b from-white to-gray-50'>
      <section className='mx-auto max-w-7xl px-5 md:px-10'>
        <div className='grid gap-10 lg:grid-cols-[1fr_380px]'>
          {/* Content */}
          <div
            data-aos='fade-up'
            className='rounded-3xl bg-white p-3 md:p-8 shadow-xl'
          >
            <span className='rounded-full bg-green-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-green-700'>
              Advanced Technology
            </span>

            <h1 className='mt-5 text-2xl md:text-4xl font-bold text-gray-900'>
              Modular Rainwater Harvesting System in{' '}
              <bold className='text-sky-600'>{location.loc}</bold>
            </h1>

            <p className='mt-8 text-base leading-7 text-gray-900'>
              Infusing{' '}
              <Link
                href='https://www.inrainconstruction.com/'
                target='_blank'
                className='font-semibold text-green-600 hover:text-sky-600'
              >
                Modular Rainwater Harvesting
              </Link>{' '}
              technology to store and reuse rainwater is key to securing a
              future with abundant water resources.
            </p>

            {/* Key Features */}

            <div className='mt-10 grid gap-4 sm:grid-cols-2'>
              {[
                'Polymers as strong as metal',
                'Load-bearing capacity and top surface utilization',
                'Time-efficient installation',
                'Accident-free design',
                'Lower maintenance costs than traditional civil pits',
                'Reduced maintenance time and resource consumption',
                'Adaptability and reusability',
                'Cost-effective solution'
              ].map((item, index) => (
                <div
                  key={index}
                  className='flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50 p-4'
                >
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white'>
                    ✓
                  </div>

                  <p className='font-medium text-gray-900'>{item}</p>
                </div>
              ))}
            </div>

            {/* Highlight */}

            <div className='mt-10 rounded-2xl border-l-4 border-green-600 bg-green-50 p-6'>
              <p className='leading-7 text-gray-900'>
                Urbanization has significantly increased water consumption,
                placing immense pressure on our limited natural resources.
                Reports of declining water levels are common worldwide.
                <strong className='text-gray-900'>
                  {' '}
                  Rainwater harvesting is a crucial solution for sustainable
                  development, and at InRain, we offer advanced rainwater
                  harvesting methods using cutting-edge technology.
                </strong>
              </p>
            </div>

            <p className='mt-5 text-base leading-7 text-gray-900'>
              In recent years,{' '}
              <Link
                className='text-green-500 hover:text-sky-500 font-semibold'
                href='https://www.inrainwaterharvesting.com/'
                target='_blank'
              >
                modular rainwater harvesting
              </Link>{' '}
              has gained popularity due to its numerous advantages over
              traditional systems.
              <strong className='text-gray-900'>
                {' '}
                This approach effectively addresses two key concerns: budget and
                space. It is not only cost-effective but also allows for the
                versatile use of space.
              </strong>
            </p>

            <p className='mt-5 text-base leading-7 text-gray-900'>
              This technique utilizes polymer-based modular structures, known
              for their strength and load-bearing capacity. Areas designated for
              rainwater harvesting with modular systems can even be used for
              vehicle parking. Installation is also quicker compared to
              traditional rainwater harvesting systems. Here are some of the key
              benefits:
            </p>

            {/* Benefits */}

            <div className='mt-6 space-y-3'>
              {[
                'Eco-friendly and economical: Polymers can be recycled and reused.',
                'Excellent filtration: The percolation tank is covered with a geotextile sheet for superior filtration.',
                'Safety: The percolation tank is placed underground, preventing unauthorized access.',
                'Cost-saving maintenance: Minimal to no maintenance is required as compared to conventional systems.',
                'Higher recharge capacity: Water enters from five sides, increasing efficiency.',
                'Durability: Co-polymer modules have a long lifespan.',
                'Portability: These stackable co-polymer modules can be easily relocated and reinstalled at different sites.'
              ].map((item, index) => (
                <div
                  key={index}
                  className='flex gap-4 rounded-xl bg-gray-100 p-4'
                >
                  <div className='mt-1 h-3 w-3 rounded-full bg-green-600'></div>

                  <p className='text-gray-900'>{item}</p>
                </div>
              ))}
            </div>

            {/* Final Highlight */}

            <div className='mt-10 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 p-6 text-white'>
              <p className='text-md leading-7'>
                <strong>
                  The modular rainwater harvesting system in {location.loc}{' '}
                  offers an affordable and space-efficient way to collect and
                  reuse rainwater.
                </strong>{' '}
                It allows you to contribute to environmental sustainability
                without exceeding your budget or compromising valuable space.
              </p>
            </div>
          </div>

          {/* Image */}

          <aside className='lg:sticky lg:top-24 h-fit'>
            <div className='overflow-hidden rounded-3xl bg-white shadow-2xl'>
              <Image
                src='/services/harvesting3.jpg'
                alt='Modular Rainwater Harvesting System'
                width={500}
                height={700}
                className='w-full object-cover transition duration-700 hover:scale-105'
              />

              <div className='p-4'>
                <h3 className='text-2xl font-bold text-gray-900'>
                  Modular Rainwater Harvesting System
                </h3>

                <p className='mt-2 text-gray-900 leading-7'>
                  Strong, reusable, load-bearing modules designed to maximize
                  groundwater recharge while minimizing installation time and
                  maintenance costs.
                </p>
              </div>
            </div>

            <div className='bg-slate-900 mt-5 text-white rounded-[32px] p-7 shadow-xl'>
              <h4 className='text-xl font-bold mb-3'>
                Need Expert Consultation?
              </h4>

              <p className='text-slate-300 leading-6 text-sm mb-5'>
                Get customized Modular Rainwater Harvesting solutions in{' '}
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

        {/* Bottom Highlight */}

        <div
          data-aos='fade-up'
          className='mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-500 shadow-2xl'
        >
          <div className='p-8 md:p-12'>
            <h2 className='mb-3 text-3xl font-bold text-white'>
              Why Choose Modular Tanks?
            </h2>

            <p className='text-md leading-7 text-white/95'>
              The land above a modular tank is not wasted, as the structure is
              load-bearing and capable of supporting tons of weight, making it a
              far more economical option compared to traditional civil pits.
              Additionally, 95% of the tank's capacity is usable, compared to
              only 50–55% in a civil pit. The modular tank also eliminates the
              risk of accidents, as it is fully enclosed, unlike RCC civil
              tanks, which pose a higher risk of falls. The system is easy to
              remove and transport to different locations, a flexibility that is
              impossible with civil pits. Holding and recharge capacity can
              start from 1 cubic meter and extend to virtually any size, all
              within a much shorter installation time.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ModularRWHSystem
