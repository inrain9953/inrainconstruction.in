import { Location } from '@/components/LocationDropdown'
import { Main1 } from '@/components/main/main1'
import { Main2 } from '@/components/main/main2'
import { Main3 } from '@/components/main/main3'
import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'
import Metatag from '@/components/SEO/Metatag'
import Schema from '@/components/SEO/Schema'
import Certification from '@/components/Certification/Certification'

export default function LocationTarget ({ city }) {
  const data = {
    title: `InRain® Construction Private Limited in ${city.loc}`,
    desc: `Discover wide range of Rainwater Harvesting System in ${city.loc}. Browse InRain® Construction Private Limited for more. Enquire Now!`,
    keyword: `Rainwater Harvesting System in ${city.loc}, Modular Rainwater Harvesting in ${city.loc}, Rainwater Harvesting for Industries in ${city.loc}`,
    canonical: `https://www.inrainconstruction.in/${city.slug}`
  }
  return (
    <>
      <Metatag data={data} />
      <Schema location={city} />
      <Navbar />
      <main>
        <Main1 location={city.loc} />
        <Main2 location={city.loc} />
        <Main3 location={city.loc} />
        <Certification />
      </main>
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
