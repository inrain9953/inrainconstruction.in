import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import serviceImg1 from "../../public/services/harvesting1.jpg";
import Image from "next/image";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import Head from "next/head";

const RainwaterForWarehouses = () => {
  const title =
    "Rainwater Harvesting System for Warehouses | InRain® Construction Pvt. Ltd.";
  const desc =
    "Optimize water conservation with InRain® Construction Pvt. Ltd.'s rainwater harvesting systems for warehouses. Our modular, eco-friendly solutions reduce water costs, maximize space efficiency, and support sustainable operations with minimal maintenance.";
  const keyword =
    "rainwater harvesting system for warehouses, warehouse water management, commercial rainwater harvesting, water conservation for warehouses, industrial water-saving solutions, warehouse sustainability, rainwater storage solutions";
  const canonical =
    "https://www.inrainconstruction.in/services/rainwater-harvesting-system-for-warehouses";
  const ogUrl =
    "https://www.inrainconstruction.in/services/rainwater-harvesting-system-for-warehouses";
  const ogTitle =
    "Rainwater Harvesting System for Warehouses | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Optimize water conservation with InRain® Construction Pvt. Ltd.'s rainwater harvesting systems for warehouses. Our modular, eco-friendly solutions reduce water costs, maximize space efficiency, and support sustainable operations with minimal maintenance.";
  const twittertitle =
    "Rainwater Harvesting System for Warehouses | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Optimize water conservation with InRain® Construction Pvt. Ltd.'s rainwater harvesting systems for warehouses. Our modular, eco-friendly solutions reduce water costs, maximize space efficiency, and support sustainable operations with minimal maintenance.";

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
        data-aos="fade-up"
        className="text-left m-5 md:m-10 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Rainwater Harvesting System for Warehouses
          </h1>
          <p className="text-md text-justify md:text-lg pt-5 text-gray-500">
            At <bold className="text-green-500 font-semibold">InRain®,</bold>{" "}
            our goal is to deliver comprehensive water conservation and
            management solutions tailored to each client’s specific needs. As
            the demand for potable water continues to rise and natural water
            sources become increasingly scarce, there is an urgent need to
            conserve water due to its extensive use in daily activities.
            Rainwater harvesting offers an effective solution for both
            residential and commercial applications.
            <br></br>
            <br></br>
            Warehouses, in particular, have high daily water consumption, making
            reliance on mains supply or groundwater unsustainable. Not only does
            this deplete natural resources quickly, but it also becomes costly.
            Installing a rainwater harvesting system for warehouses addresses
            both concerns by offering a cost-effective and environmentally
            friendly alternative.{" "}
            <bold className="text-black font-semibold">
              Our expertise lies in understanding each client’s unique needs and
              delivering customized solutions that help optimize both space and
              cost.
            </bold>
            <br></br>
            <br></br> Our modular rainwater harvesting systems are ideal for
            water conservation in commercial spaces like warehouses. These
            systems utilize stackable modules made from recycled co-polymer
            materials, making them easy to install and allowing the structure to
            be built efficiently. The use of recycled materials ensures that the
            system is both cost-effective and environmentally friendly,
            promoting sustainable water conservation. For commercial spaces, the
            goal is often to minimize the space occupied by rainwater harvesting
            systems.{" "}
            <bold className="text-black font-semibold">
              Our modular systems offer a high load-bearing capacity, enabling
              the top surface to be used for other purposes, thus maximizing
              space efficiency. In addition, these systems require minimal
              maintenance, making them a practical and sustainable solution for
              water management in warehouses.
            </bold>
          </p>
        </div>
        <Image
          className="mt-10 md:m-5 md:h-72 rounded-2xl shadow-2xl md:min-w-80"
          src={serviceImg1}
          alt="rainwater harvesting system for warehouses"
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

export default RainwaterForWarehouses;
