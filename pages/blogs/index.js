import { Navbar } from '@/components/navbar/navbar'
import React from 'react'
import { blogHomepage } from '@/components/blogs/blog'
import { Button } from '@mui/material'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import { Footer } from '@/components/footer/footer'
import Image from 'next/image'
import Head from 'next/head'

const Blogs = () => {
  const title = 'Rainwater Harvesting Blogs | InRain® Construction Pvt. Ltd.'
  const desc =
    'Explore the benefits of Modular Rainwater Harvesting Systems, an innovative solution for water conservation. Learn how this space-efficient, cost-effective, and eco-friendly technology can address water scarcity while supporting sustainable development.'
  const keyword =
    'Modular rainwater harvesting, sustainable water management, water conservation system, rainwater reuse, eco-friendly water solutions, polymer-based rainwater harvesting, efficient water storage, quick installation rainwater systems, low-maintenance rainwater harvesting, urban water solutions, sustainable development'
  const canonical = 'https://www.inrainconstruction.in/blogs'
  const ogUrl = 'https://www.inrainconstruction.in/blogs'
  const ogTitle = 'Rainwater Harvesting Blogs | InRain® Construction Pvt. Ltd.'
  const ogDescription =
    'Explore the benefits of Modular Rainwater Harvesting Systems, an innovative solution for water conservation. Learn how this space-efficient, cost-effective, and eco-friendly technology can address water scarcity while supporting sustainable development.'
  const twittertitle =
    'Rainwater Harvesting Blogs | InRain® Construction Pvt. Ltd.'
  const twitterdescription =
    'Explore the benefits of Modular Rainwater Harvesting Systems, an innovative solution for water conservation. Learn how this space-efficient, cost-effective, and eco-friendly technology can address water scarcity while supporting sustainable development.'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_US' />
        <meta name='description' content={desc} />
        <meta name='keywords' content={keyword} />
        <meta name='canonical' content={canonical} />
        <meta property='og:title' content={ogTitle} />
        <meta property='og:description' content={ogDescription} />
        <meta property='og:url' content={ogUrl} />
        <meta name='twitter:title' content={twittertitle} />
        <meta name='twitter:description' content={twitterdescription} />
        <meta
          property='og:site_name'
          content='InRain® Construction Pvt. Ltd.'
        />
      </Head>
      <Navbar />
      <div className='m-5'>
        <p className='text-xs mt-12 text-black'>
          <Link className='hover:text-green-500' href={'/'}>
            Home
          </Link>{' '}
          / Blogs
        </p>
      </div>
      <div>
        <div>
          <div className='md:grid md:grid-cols-3'>
            {blogHomepage.map(items => (
              <div
                data-aos='fade-up'
                key={items.id}
                className='m-5 shadow-xl rounded-lg'
              >
                <div>
                  <Image
                    width={500}
                    height={500}
                    className='rounded-lg w-full md:h-64 object-cover'
                    src={items.image}
                    alt={items.title}
                  />
                </div>
                <div className='p-3'>
                  <p className='text-xs font-semibold'>{items.date}</p>
                  <Link href={items.url}>
                    <h2 className='font-semibold underline hover:text-green-500 text-lg m-2'>
                      {items.title}
                    </h2>
                  </Link>
                  <p className='m-2 text-sm text-justify'>
                    {items.description}
                  </p>
                  <Link className='m-2 pt-3 text-xs hover:text-green-500 text-red-500' href={items.url}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blogs
