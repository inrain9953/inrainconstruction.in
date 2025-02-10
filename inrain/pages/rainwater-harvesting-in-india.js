import { Location } from "@/components/constant";
import { Footer } from "@/components/footer/footer";
import LocationTarget from "@/components/locationTarget/loc";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@mui/material";
import Head from "next/head";
import React from "react";

const RainwaterIndia = () => {
  const location = "India";

  const title = `Rainwater Harvesting in ${location} | Rainwater Harvesting System Service Provider in ${location}`;
  const desc = `Looking for the best Rainwater Harvesting System in ${location}? We offer top-quality rainwater harvesting solutions at affordable prices. Contact the leading service provider today!`;
  const keyword = `Rainwater Harvesting in ${location}, Rooftop Rainwater Harvesting in ${location}, Rainwater Harvesting System Service Provider in ${location}, Modular Rainwater Harvesting System in ${location}, Polymer Type Rainwater Harvesting System in ${location}, Rainwater Harvesting for Industries in ${location}, Rain Water Harvesting System Manufacturers In ${location}, Rain Water Harvesting System Suppliers In ${location}, Rain Water Harvesting System Exporters, Best Rain Water Harvesting System In ${location}`;
  const canonical =
    "https://www.inrainconstruction.in/rainwater-harvesting-in-india";
  const ogUrl =
    "https://www.inrainconstruction.in/rainwater-harvesting-in-india";
  const ogTitle = `Rainwater Harvesting in ${location} | Rainwater Harvesting System Service Provider in ${location}`;
  const ogDescription = `Looking for the best Rainwater Harvesting System in ${location}? We offer top-quality rainwater harvesting solutions at affordable prices. Contact the leading service provider today!`;
  const twittertitle = `Rainwater Harvesting in ${location} | Rainwater Harvesting System Service Provider in ${location}`;
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
      <LocationTarget loc={"India"} />
      <div className="pt-5">
        <div className="text-center">
          <Button variant="contained" color="primary">
            Business Network
          </Button>
        </div>
        <div className="mt-5">
          <div>
            <div
              className="md:grid md:grid-cols-6 grid grid-cols-3 p-3 border-2 border-black m-5 md:p-10"
            >
              {Location.map((item) => (
                <a
                data-aos="zoom-in-up"
                  className="text-center m-1 font-semibold hover:text-green-500"
                  href={item.url}
                >
                  {item.location}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RainwaterIndia;
