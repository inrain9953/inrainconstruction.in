import Head from "next/head";
import React from "react";

const ModularMetatag = ({ loc, location }) => {
  const title = `Modular Rainwater Harvesting in ${loc} | Modular Rainwater Harvesting Service Provider in ${loc}`;
  const desc = `Looking for the best Modular Rainwater Harvesting System in ${loc}? We offer top-quality rainwater harvesting solutions at affordable prices. Contact the leading service provider today!`;
  const keyword = `Modular Rainwater Harvesting in ${loc}, Rooftop Rainwater Harvesting in ${loc}, Rainwater Harvesting Service Provider in ${loc}, Rainwater Harvesting in ${loc}, Polymer Type Rainwater Harvesting System in ${loc}, Rainwater Harvesting for Industries in ${loc}, Rain Water Harvesting System Manufacturers In ${loc}, Rain Water Harvesting System Suppliers In ${loc}, Rain Water Harvesting System Exporters, Best Rain Water Harvesting System In ${loc}`;
  const canonical = `https://www.inrainconstruction.in/modular-rainwater-harvesting-in-${location}`;
  const ogUrl = `https://www.inrainconstruction.in/modular-rainwater-harvesting-in-${location}`;
  const ogTitle = `Modular Rainwater Harvesting in ${loc} | Modular Rainwater Harvesting Service Provider in ${loc}`;
  const ogDescription = `Looking for the best Modular Rainwater Harvesting System in ${loc}? We offer top-quality rainwater harvesting solutions at affordable prices. Contact the leading service provider today!`;
  const twittertitle = `Modular Rainwater Harvesting in ${loc} | Modular Rainwater Harvesting Service Provider in ${loc}`;
  const twitterdescription = `Looking for the best Modular Rainwater Harvesting System in ${loc}? We offer top-quality rainwater harvesting solutions at affordable prices. Contact the leading service provider today!`;

  return (
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
      <meta property="og:site_name" content="InRain® Construction Pvt. Ltd." />
    </Head>
  );
};

export default ModularMetatag;
