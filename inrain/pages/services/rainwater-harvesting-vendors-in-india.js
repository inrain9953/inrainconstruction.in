import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg7 from "../../public/services/harvesting7.jpg";
import Head from "next/head";

const RWHvendorsInIndia = () => {
  const title =
    "Rainwater Harvesting Vendors in India | InRain® Construction Pvt. Ltd.";
  const desc =
    "Discover InRain Construction Pvt. Ltd., a top rainwater harvesting vendor in India. Offering innovative, modular systems with German technology, we deliver cost-effective and eco-friendly solutions for water conservation and groundwater recharge.";
  const keyword =
    "Rainwater Harvesting Vendors in India, water conservation solutions India, eco-friendly water management, rainwater harvesting installation India, sustainable water solutions, groundwater recharge India, Make in India rainwater systems";
  const canonical =
    "https://www.inrainconstruction.in/services/rainwater-harvesting-vendors-in-india";
  const ogUrl =
    "https://www.inrainconstruction.in/services/rainwater-harvesting-vendors-in-india";
  const ogTitle =
    "Rainwater Harvesting Vendors in India | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Discover InRain Construction Pvt. Ltd., a top rainwater harvesting vendor in India. Offering innovative, modular systems with German technology, we deliver cost-effective and eco-friendly solutions for water conservation and groundwater recharge.";
  const twittertitle =
    "Rainwater Harvesting Vendors in India | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Discover InRain Construction Pvt. Ltd., a top rainwater harvesting vendor in India. Offering innovative, modular systems with German technology, we deliver cost-effective and eco-friendly solutions for water conservation and groundwater recharge.";

  return (
    <>
    <Head>
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="description" content={desc} />
        <meta name="keywords" content={keyword} />
        <meta name="canonical" content={canonical} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={ogUrl} />
        <meta name="twitter:title" content={twittertitle} />
        <meta name="twitter:description" content={twitterdescription} />
        <meta
          property="og:site_name"
          content="InRain® Construction Pvt. Ltd."
        />
      </Head>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-5 md:m-10 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Rainwater Harvesting Vendors in India
          </h1>
          <p className="text-md text-justify md:text-lg pt-5 text-gray-500">
            <bold className="text-green-500 font-semibold">
              InRain®
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
              InRain®,
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
          className="mt-10 md:m-5 md:h-72 md:min-w-80"
          src={serviceImg7}
          alt="rainwater harvesting vendors in india"
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
