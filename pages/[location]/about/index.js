import { Location } from '@/components/LocationDropdown'
import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'
import Metatag from '@/components/SEO/Metatag'
import Schema from '@/components/SEO/Schema'
import AboutPage from '@/components/AboutPage/AboutPage'
import BreadcrumbSchema from '@/components/SEO/Breadcrumb'

export default function AboutLocationPage ({ city }) {
  const data = {
    title: `About Us | InRain Construction Private Limited -  ${city.loc}, India`,
    desc: `About InRain® Construction Private Limited in ${city.loc}. Enquire Now!`,
    keyword: `Rainwater Harvesting System in ${city.loc}, Modular Rainwater Harvesting in ${city.loc}, Rainwater Harvesting Installation company in ${city.loc}, Rainwater Harvesting for Industries in ${city.loc}`,
    canonical: `https://www.inrainconstruction.in/${city.slug}/about`
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
      name: 'About Us',
      item: `https://www.inrainconstruction.in/${city.slug}/about`
    }
  ]

  const AboutCity = {
    loc: city.loc,
    slug: city.slug + '/about',
    pincode: city.pincode,
    id: city.id
  }

  return (
    <>
      <Metatag data={data} />
      <Schema location={AboutCity} />
      <BreadcrumbSchema location={crumb} />
      <Navbar />
      <AboutPage location={city} />
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
