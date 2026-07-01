import Script from 'next/script'

const Schema = ({ location }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'InRain® Construction Private Limited',
    alternateName: 'InRain® Construction Private Limited',
    description: `InRain Construction is the leading provider of Rainwater Harvesting System in ${location.loc}. Our foundation is built on a commitment to excellence and innovation of conserving water, protecting the resource and evolve ourselves for better tomorrow.  If you are searching for a Rainwater harvesting system in ${location.loc} then InRain Construction is the right choice. We are a Rainwater Harvesting company that provides Best Rainwater harvesting system based on your requirements. Contact us today for a free consultation.`,
    url: `https://www.inrainconstruction.in/${location.slug}`,
    logo: 'https://www.inrainconstruction.in/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.loc,
      addressRegion: 'India',
      postalCode: location.pincode
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '9910220794',
        email: 'mail@inrainconstruction.com',
        contactType: 'customer enquiry'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      ratingCount: '943'
    }
  }

  return (
    <Script
      id={`schema-${location.loc}`}
      type='application/ld+json'
      strategy='beforeInteractive'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}

export default Schema
