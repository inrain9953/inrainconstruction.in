import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar/navbar'
import { Main1 } from '@/components/main/main1'
import { Main2 } from '@/components/main/main2'
import { Main3 } from '@/components/main/main3'
import { Footer } from '@/components/footer/footer'
import Metatag from '@/components/SEO/Metatag'
import Schema from '@/components/SEO/Schema'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  const data = {
    title: 'InRain® Construction Private Limited in Delhi',
    desc: 'Discover wide range of Rainwater Harvesting System in Delhi. Browse InRain® Construction Private Limited for more. Enquire Now!',
    keyword:
      'Rainwater Harvesting System in Delhi, Modular Rainwater Harvesting in Delhi, Rainwater Harvesting for Industries in delhi',
    canonical: 'https://www.inrainconstruction.in/'
  }

  const city = { loc: 'Delhi', slug: '', pincode: '110001', id: 7 }
  return (
    <>
      <Metatag data={data} />
      <Schema location={city} />
      <Navbar />
      <Main1 location={'Delhi'} />
      <Main2 location={'Delhi'} />
      <Main3 location={'Delhi'} />
      <Footer />
    </>
  )
}
