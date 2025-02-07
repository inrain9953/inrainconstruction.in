import { Footer } from '@/components/footer/footer'
import ModularLoc from '@/components/locationTarget/modularLoc'
import ModularMetatag from '@/components/locationTarget/modularMetatag'
import { Navbar } from '@/components/navbar/navbar'
import React from 'react'

const ModularAgra = () => {
  return (
    <>
    <ModularMetatag loc="Agra" location={"agra"} />
    <Navbar />
    <ModularLoc loc={"Agra"} />
    <Footer />
    </>
  )
}

export default ModularAgra