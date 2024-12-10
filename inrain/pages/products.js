import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import Image from "next/image";
import product1 from "./../public/product/product1.jpeg";
import product3 from "./../public/product/product3.png";
import product4 from "./../public/product/product4.jpeg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Carousel } from "@/components/carousel/carousel";
import service4 from "./../public/service4.jpg";
import Head from "next/head";

const Products = () => {
  const title = "Rainwater Harvesting Products | InRain® Construction Pvt. Ltd.";
  const desc =
    "Are you looking for Rainwater Harvesting products? InRain® Rainwater Harvesting provides Pressure Regulator Valve (PRV), Self Cleaning Mesh Filter System, Rainwater Harvesting Modules, Rainwater Harvesting Filtration System, EPDM Liner, Geo Textile.";
  const keyword =
    "Rainwater Harvesting Products, Self Cleaning Mesh Filter System, Rainwater Harvesting Filtration System, Rainwater Harvesting Filter, modular rainwater harvesting system, rainwater harvesting technology";
  const canonical = "https://www.inrainconstruction.in/products";
  const ogUrl = "https://www.inrainconstruction.in/products";
  const ogTitle = "Rainwater Harvesting Products | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Are you looking for Rainwater Harvesting products? InRain Rainwater Harvesting provides Pressure Regulator Valve (PRV), Self Cleaning Mesh Filter System, Rainwater Harvesting Modules, Rainwater Harvesting Filtration System, EPDM Liner, Geo Textile.";
  const twittertitle =
    "Rainwater Harvesting Products | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Are you looking for Rainwater Harvesting products? InRain® Rainwater Harvesting provides Pressure Regulator Valve (PRV), Self Cleaning Mesh Filter System, Rainwater Harvesting Modules, Rainwater Harvesting Filtration System, EPDM Liner, Geo Textile.";

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
      <div data-aos="fade-up" className="m-5">
        <Image
          className="w-full rounded-xl shadow-xl"
          src={service4}
          alt="img"
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>
      <div>
        <div className="mb-14">
          <div className="text-center">
          <h1 className="text-xl md:text-3xl font-semibold text-black">Rainwater Harvesting Products</h1>
          </div>
          <div className="m-5 md:grid md:grid-cols-2 items-center md:m-10 md:gap-10">
            <div data-aos="fade-up" className="text-center mb-5">
              <p className="text-2xl font-semibold text-green-600">
                InRain<sup>®</sup>
              </p>
              <Image
                src={product1}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
              <p className="text-xl md:text-2xl m-2 font-semibold">
                Accident Free Honeycomb Structure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div
                data-aos="fade-up"
                className="bg-gray-300 rounded-xl p-5 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-center m-3 text-green-600">
                  High Void Ratio
                </h3>
                <hr className="m-2 "></hr>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    Reduce the amount of digging and can make a big volume
                    storage in compact space.
                  </p>
                </div>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    As digging is small so post processing is easy.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="bg-gray-300 rounded-xl p-5 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-center m-3 text-green-600">
                  Time Saving
                </h3>
                <hr className="m-2 "></hr>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    Installation can be done only by hand.
                  </p>
                </div>

                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    Compared to using concrete no need curing time.
                  </p>
                </div>

                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    No need of heavy equipment unlikely to use pre-casting
                    concrete products.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="bg-gray-300 rounded-xl p-5 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-center m-3 text-green-600">
                  Heavy Load Capacity Design
                </h3>
                <hr className="m-2 "></hr>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    Having load bearing strength up to 46 ton/sqm.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="bg-gray-300 rounded-xl p-5 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-center m-3 text-green-600">
                  Easy Installation
                </h3>
                <hr className="m-2 "></hr>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    Installation speed is outstanding.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="bg-gray-300 rounded-xl p-5 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-center m-3 text-green-600">
                  No Pollution
                </h3>
                <hr className="m-2 "></hr>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">Polypropylene is used.</p>
                </div>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    Excellent chemical and water resistant, do not pollute the
                    water.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="bg-gray-300 rounded-xl p-5 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-center m-3 text-green-600">
                  Compact Storage
                </h3>
                <hr className="m-2 "></hr>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    It can be easily stored if piled in the same direction and
                    reduces storage space at the site.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="mt-10 m-5 md:m-10">
            <div className="md:grid grid-cols-2 items-center">
              <Image
                src={product3}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
              <Image
                src={product4}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <h2 className="text-center text-xl md:text-2xl m-2 font-semibold">
              High Quality Filtration System
            </h2>
          </div>
        </div>
      </div>
      <Carousel />
      <Footer />
    </>
  );
};

export default Products;
