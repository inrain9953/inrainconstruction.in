import React from 'react'
import Head from 'next/head'

const Metatag = ({ data }) => {
  return (
    <Head>
      <title>{data.title}</title>
      <meta charSet='UTF-8' />
      <meta name='language' content='en' />
      <meta name='author' content='InRain® Construction Pvt. Ltd.' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='robots' content='index, follow' />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <meta name='description' content={data.desc} />
      <meta name='keywords' content={data.keyword} />
      <meta name='canonical' content={data.canonical} />
      <meta property='og:title' content={data.title} />
      <meta property='og:description' content={data.desc} />
      <meta property='og:url' content={data.canonical} />
      <meta name='twitter:title' content={data.title} />
      <meta name='twitter:description' content={data.desc} />
      <meta name='geo.region' content='IN' />
      <meta name='geo.placename' content={data.canonical} />
      <meta property='og:site_name' content='InRain® Construction Pvt. Ltd.' />
      <meta
        name='google-site-verification'
        content='f5HmR_XHPeBiTtIA27g5bBonwT1sdqQD_u7cP3tQIV4'
      />
      <link rel='icon' href='/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/android-chrome-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='512x512'
        href='/android-chrome-512x512.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      {/* <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-1CFEW0CZTM'
      /> */}
    </Head>
  )
}

export default Metatag
