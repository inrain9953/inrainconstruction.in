import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg10 from "../../public/services/harvesting10.jpg";

const BioswaleForRainwater = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Bioswale for Rainwater Drain
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            {" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            is at the forefront of promoting the efficient use of rainwater
            through various conservation and management solutions. As
            groundwater levels continue to decline, the company emphasizes the
            importance of capturing rainwater to alleviate water shortages.
            InRain advocates for methods like bioswales, which help retain water
            in the soil, preventing it from being lost in storm sewers.
            <br></br>
            <br></br>
            Specializing in the construction of bioswales,{" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            brings extensive expertise to the field. These bioswales are large,
            linear rain gardens designed to manage stormwater. Beyond their
            functional purpose, they are landscaped with native plants, serving
            as both aesthetic and practical stormwater management systems.
            <br></br>
            <br></br>
            Modern residential communities and industrial zones benefit
            significantly from bioswales. Much of the rainwater that falls on
            impervious surfaces like pavements, roofs, and roads often flows
            directly into storm drains, rather than seeping into the ground.
            This excess runoff can cause substantial damage if left unmanaged.
            Experts in hydrology now recommend bioswales as an effective
            solution, as they offer better control of stormwater and provide
            environmental benefits.
            <br></br>
            <br></br>
            Bioswales can be easily integrated into existing infrastructure.
            Common locations for installation include parking lots, sidewalks,
            parks, streets, and other open spaces. It is essential to test the
            soil before installation to ensure that the runoff can infiltrate it
            properly and recharge the groundwater table at a natural rate. With
            the help of advanced technology, even constructed bioswales can
            mimic the appearance and function of natural systems. <br></br>
            <br></br>
            Through this approach,{" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            aims to provide long-term, sustainable solutions for rainwater
            management.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg10}
        />
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default BioswaleForRainwater;
