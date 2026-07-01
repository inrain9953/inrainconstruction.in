import { Location } from '@/components/LocationDropdown'
import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'
import Metatag from '@/components/SEO/Metatag'
import Schema from '@/components/SEO/Schema'
import BreadcrumbSchema from '@/components/SEO/Breadcrumb'
import ModularRWHSystem from '@/components/ModularRWHSystem/ModularRWHSystem'

export default function ModularRWHSystemLocationPage ({ city }) {
  const data = {
    title: `Modular Rainwater Harvesting System in ${city.loc} | InRain® Construction Private Limited - ${city.loc}, India`,
    desc: `Discover modular rainwater harvesting system in ${city.loc} for sustainable water management. Learn how to conserve water, reduce stormwater runoff, and ease pressure on groundwater and municipal supplies with effective rainwater collection methods.`,
    keyword: `modular rainwater harvesting system in ${city.loc}, rainwater harvesting system in ${city.loc}, sustainable water solutions, rainwater storage tanks, rainwater harvesting benefits, rainwater filters and tanks`,
    canonical: `https://www.inrainconstruction.in/${city.slug}/modular-rainwater-harvesting-system`
  }

  const crumb = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `https://www.inrainconstruction.in/${city.slug}`
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Modular Rainwater Harvesting System',
      item: `https://www.inrainconstruction.in/${city.slug}/modular-rainwater-harvesting-system`
    }
  ]

  const AboutCity = {
    loc: city.loc,
    slug: city.slug + '/modular-rainwater-harvesting-system',
    pincode: city.pincode,
    id: city.id
  }
  return (
    <>
      <Metatag data={data} />
      <Schema location={AboutCity} />
      <BreadcrumbSchema location={crumb} />
      <Navbar />
      <ModularRWHSystem location={city} />
      <Footer />
    </>
  )
}

/* ---------------------------- */
/* Static Paths */
/* ---------------------------- */

export async function getStaticPaths () {
  const paths = Location.filter(city => city.slug !== '').map(city => ({
    params: {
      location: city.slug
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

/* ---------------------------- */
/* Static Props */
/* ---------------------------- */

export async function getStaticProps ({ params }) {
  const slug = params.location

  // FIXED: find city by slug
  const city = Location.find(item => item.slug === slug)

  // 404 page if city not found
  if (!city) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      city,
      slug
    },

    // Rebuild every 24 hrs
    revalidate: 86400
  }
}
