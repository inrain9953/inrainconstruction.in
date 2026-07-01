import Script from 'next/script'

const BreadcrumbSchema = ({ location }) => {
  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: location
  }

  return (
    <Script
      id={`schema-${location.slug}`}
      type='application/ld+json'
      strategy='beforeInteractive'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}

export default BreadcrumbSchema
