import { Footer } from "@/components/footer/footer";
import LocationTarget from "@/components/locationTarget/loc";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import Head from "next/head";

const RainwaterInKanpur = () => {
  const location = "Kanpur";

  const title = `Rainwater Harvesting System in ${location} | Rainwater Harvesting System Service Provider in ${location}`;
  const desc = `Looking for the best Rainwater Harvesting System in ${location}? We offer top-quality rainwater harvesting solutions at affordable prices. Contact the leading service provider today!`;
  const keyword = `Rainwater Harvesting System in ${location}, Rooftop Rainwater Harvesting System in ${location}, Rainwater Harvesting System Service Provider in ${location}, Modular Rainwater Harvesting System in ${location}, Rainwater Harvesting Tank in ${location}, Polymer Type Rainwater Harvesting System in ${location}, Rainwater Harvesting for Industries in ${location}, Storm water Management in ${location}`;
  const canonical =
    "https://www.inrainconstruction.in/rainwater-harvesting-system-in-kanpur";
  const ogUrl =
    "https://www.inrainconstruction.in/rainwater-harvesting-system-in-kanpur";
  const ogTitle = `Rainwater Harvesting System in ${location} | Rainwater Harvesting System Service Provider in ${location}`;
  const ogDescription = `Looking for the best Rainwater Harvesting System in ${location}? We offer top-quality rainwater harvesting solutions at affordable prices. Contact the leading service provider today!`;
  const twittertitle =
    "Rainwater Harvesting System in India | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Are you searching for a Rainwater harvesting system? InRain Water Harvesting company that provides Rainwater harvesting system based on the technology adopted from Germany. Contact us today for a free consultation.";

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
        <meta name="author" content="InRain® Construction Pvt Ltd"></meta>
        <meta
          property="og:site_name"
          content="InRain® Construction Pvt. Ltd."
        />
      </Head>
      <Navbar />
      <LocationTarget loc={"Kanpur"} />
      <Footer />
    </>
  );
};

export default RainwaterInKanpur;
