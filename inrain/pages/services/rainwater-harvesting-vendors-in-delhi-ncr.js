import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg7 from "../../public/services/harvesting7.jpg";
import Head from "next/head";

const RWHvendorsInNcr = () => {
  const title =
    "Rainwater Harvesting Vendors in Delhi-Gurgaon | InRain® Construction Pvt. Ltd.";
  const desc =
    "Explore InRain Construction Pvt. Ltd., a top rainwater harvesting vendor in Delhi-Gurgaon. Offering advanced modular systems with German technology, we provide cost-effective, eco-friendly solutions for water conservation and groundwater recharge.";
  const keyword =
    "Rainwater Harvesting Vendors in Delhi-Gurgaon, Delhi-Gurgaon Rainwater Harvesting, water conservation solutions, rainwater harvesting installation, water conservation Delhi, groundwater recharge solutions";
  const canonical =
    "https://www.inrainconstruction.in/services/rainwater-harvesting-vendors-in-delhi-ncr";
  const ogUrl =
    "https://www.inrainconstruction.in/services/rainwater-harvesting-vendors-in-delhi-ncr";
  const ogTitle =
    "Rainwater Harvesting Vendors in Delhi-Gurgaon | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Explore InRain Construction Pvt. Ltd., a top rainwater harvesting vendor in Delhi-Gurgaon. Offering advanced modular systems with German technology, we provide cost-effective, eco-friendly solutions for water conservation and groundwater recharge.";
  const twittertitle =
    "Rainwater Harvesting Vendors in Delhi-Gurgaon | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Explore InRain Construction Pvt. Ltd., a top rainwater harvesting vendor in Delhi-Gurgaon. Offering advanced modular systems with German technology, we provide cost-effective, eco-friendly solutions for water conservation and groundwater recharge.";

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
            Rainwater Harvesting Vendors in Delhi-Gurgaon
          </h1>
          <p className="text-md text-justify md:text-lg pt-5 text-gray-500">
            <bold className="text-green-500 font-semibold">InRain®</bold> is a
            leading provider of water conservation and management services,
            known for delivering innovative, technology-driven solutions
            tailored to contemporary needs.{" "}
            <bold className="text-black font-semibold">
              As a top vendor of rainwater harvesting systems in the
              Delhi-Gurgaon region, we understand the unique challenges faced by
              modern industries and housing societies.
            </bold>{" "}
            Our approach combines advanced technology with cost-effectiveness to
            address these water conservation needs.
            <br></br>
            Our rainwater harvesting systems utilize cutting-edge German
            technology.{" "}
            <bold className="text-black font-semibold">
              We are dedicated to the 'Make in India' initiative, with all
              manufacturing carried out in-house to maintain consistent quality
              and enhance customer satisfaction.
            </bold>
            <br></br>
            <br></br>Given India's dense population and increasing demand for
            eco-friendly water conservation methods, our advanced modular
            rainwater harvesting systems are an ideal solution. India’s
            favorable geographical location and annual rainfall make it
            well-suited for harnessing natural rainwater. Our modular systems
            are not only cost-effective and environmentally friendly but also
            designed to save space—a critical factor in a densely populated
            country like India.
            <br></br>
            <br></br>
            With global groundwater levels rapidly declining due to overuse,
            effective rainwater harvesting systems are essential.{" "}
            <bold className="text-green-500 font-semibold">InRain®</bold>{" "}
            contributes to this important socio-economic effort by facilitating
            the use of natural rainwater.{" "}
            <bold className="text-black font-semibold">
              Our team has successfully supported over 150 rainwater harvesting
              projects, offering comprehensive services that include
              installation, maintenance, and management. Our solutions are
              designed to be economical, eco-friendly, and superior to
              traditional rainwater harvesting methods.
            </bold>
          </p>
        </div>
        <Image
          className="mt-10 md:m-5 md:h-72 md:min-w-80 rounded-xl"
          src={serviceImg7}
          alt="rainwater harvesting vendors in delhi gurgaon"
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

export default RWHvendorsInNcr;
