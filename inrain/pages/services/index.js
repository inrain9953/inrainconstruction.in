import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import Image from "next/image";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import service11 from "../../public/service11.jpg";
import Head from "next/head";
const Services = () => {
  const title =
    "Modular Rainwater Harvesting Service Provider | InRain® Construction Pvt. Ltd.";
  const desc =
    "Explore InRain® Construction Pvt. Ltd., a trusted provider of modular rainwater harvesting solutions in India and Delhi NCR. Offering tailored systems for industries and warehouses using advanced co-polymer, modular, and FRP technologies. Enhance water efficiency and sustainability with our high-quality, cost-effective services.";
  const keyword =
    "Modular rainwater harvesting service provider, rainwater harvesting service provider, modular rainwater harvesting system India, rainwater harvesting Delhi NCR, co-polymer technology, FRP rainwater systems, sustainable water solutions, industrial rainwater harvesting, warehouse rainwater harvesting";
  const canonical = "https://www.inrainconstruction.in/services";
  const ogUrl = "https://www.inrainconstruction.in/services";
  const ogTitle =
    "Modular Rainwater Harvesting Service Provider | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Explore InRain® Construction Pvt. Ltd., a trusted provider of modular rainwater harvesting solutions in India and Delhi NCR. Offering tailored systems for industries and warehouses using advanced co-polymer, modular, and FRP technologies. Enhance water efficiency and sustainability with our high-quality, cost-effective services.";
  const twittertitle =
    "Modular Rainwater Harvesting Service Provider | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Explore InRain® Construction Pvt. Ltd., a trusted provider of modular rainwater harvesting solutions in India and Delhi NCR. Offering tailored systems for industries and warehouses using advanced co-polymer, modular, and FRP technologies. Enhance water efficiency and sustainability with our high-quality, cost-effective services.";

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
      <div className="m-5">
        <Image
          alt="img"
          className="w-full rounded-xl shadow-xl"
          src={service11}
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>
      <div
        data-aos="zoom-in-up"
        className="text-center pt-7 md:text-left md:ml-10"
      >
        <h1 className="text-2xl font-bold md:text-4xl text-green-700 md:font-semibold">
          Modular Rainwater Harvesting Service Provider
        </h1>
        <p className="text-md md:text-lg pt-2">
          Harvesting Rain, Sustaining Tomorrow.
        </p>
      </div>
      <div data-aos="zoom-in-up" className="text-center m-5 md:m-10 md:text-left">
        <h3 className="text-xl font-bold md:text-[2rem] md:font-semibold">
          The Services we provide
        </h3>
        <p className="text-md text-justify md:text-lg pt-3 md:pt-5 md:mr-64 text-gray-500">
          At{" "}
          <bold className="text-green-500 font-semibold">
            InRain<sup>®</sup> Construction Pvt. Ltd.,
          </bold>{" "}
          we provide a comprehensive range of{" "}
          <bold className="text-green-500 font-semibold">
            Modular Rainwater Harvesting
          </bold>{" "}
          solutions, customized to meet the unique requirements of our clients.{" "}
          <bold className="text-black font-semibold">
            Our offerings include the design and installation of Rainwater
            Harvesting Systems for warehouses, utilizing co-polymer, modular,
            and Fiber Reinforced Polymer (FRP) technologies.
          </bold>
          <br></br>
          <br></br>{" "}
          <bold className="text-black font-semibold">
            As a leading rainwater harvesting system provider in India and the
            Delhi(NCR),
          </bold>{" "}
          we deliver high-quality services to industries and commercial sectors.
          Our solutions are engineered to maximize water resource efficiency,
          support sustainability, and reduce dependence on external water
          supplies.{" "}
          <bold className="text-black font-semibold">
            With in-house manufacturing facilities, we guarantee exceptional
            quality and cost-effectiveness, making us a reliable partner for
            rainwater harvesting systems nationwide.
          </bold>
        </p>
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default Services;
