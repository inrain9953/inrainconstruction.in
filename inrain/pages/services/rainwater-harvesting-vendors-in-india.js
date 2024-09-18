import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg7 from "../../public/services/harvesting7.jpg";

const RWHvendorsInIndia = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Rainwater Harvesting Vendors in India
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            is a leading provider of water conservation and management services,
            recognized for delivering modern, technology-driven solutions
            tailored to contemporary needs. As a top rainwater harvesting
            provider in India, we are well-versed in addressing the challenges
            faced by today’s industries and residential communities. Our
            solutions are designed to be both technologically advanced and
            cost-effective, meeting diverse water conservation requirements.
            <br></br>
            <br></br>
            Our rainwater harvesting systems leverage state-of-the-art German
            technology. We take pride in our commitment to the ‘Make in India’
            initiative, with all manufacturing conducted in-house to ensure
            consistent quality and enhance customer satisfaction.
            <br></br>
            <br></br>Given India’s dense population and increasing demand for
            sustainable water conservation methods, our advanced modular
            rainwater harvesting systems are ideally suited to the country’s
            needs. India's favorable climate, with its ample annual rainfall,
            makes it an excellent location for harnessing natural rainwater. Our
            modular systems are not only cost-effective and environmentally
            friendly but also designed to save space, which is a significant
            advantage in densely populated areas.
            <br></br>
            <br></br>
            With the global groundwater levels depleting rapidly due to overuse,
            effective rainwater harvesting systems are crucial. At{" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.,
            </bold>{" "}
            we are dedicated to this important socio-economic cause by enabling
            the efficient use of natural rainwater. Our team has successfully
            supported over 150 rainwater harvesting projects, offering
            comprehensive services including installation, maintenance, and
            management. Our solutions are designed to be economical,
            eco-friendly, and more effective than traditional rainwater
            harvesting methods.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg7}
          alt="img"
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default RWHvendorsInIndia;
